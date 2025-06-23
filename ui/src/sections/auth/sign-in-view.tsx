import type { Control } from 'react-hook-form';

import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';

import { FormInputEmail } from './form-input-email';
import { FormInputPassword } from './form-input-password';

// ----------------------------------------------------------------------
export type IFormInput = {
  email: string;
  password: string;
};

export type TFormInputEmail = {
  name: 'email' | 'password';
  label: string;
  control?: Control<IFormInput, any, IFormInput>;
};

const defaultValues = {
  email: '',
  password: '',
};

export function SignInView() {
  const [cookies, setCookie] = useCookies(['isSignin']);
  const { control, handleSubmit, setError } = useForm<IFormInput>({ defaultValues });
  const router = useRouter();

  useEffect(() => {
    if (cookies.isSignin) {
      router.push('/');
    }
  }, [cookies.isSignin, router]);

  const handleSignIn = useCallback(
    (data: IFormInput) => {
      if (
        data.email === import.meta.env.VITE_AUTH_LOGIN &&
        data.password === import.meta.env.VITE_AUTH_PASSWORD
      ) {
        setCookie('isSignin', true, { maxAge: 3600 * 24 * 3 });
      } else {
        setError('email', {
          type: 'validation',
          message: 'Неверный логин или пароль',
        });
        setError('password', {
          type: 'validation',
          message: 'Неверный логин или пароль',
        });
      }
    },
    [setCookie, setError]
  );

  const renderForm = (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <FormInputEmail name="email" label="Email" control={control} />

      <FormInputPassword name="password" label="Пароль" control={control} />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleSubmit(handleSignIn)}
      >
        Войти
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h5">Войти</Typography>
      </Box>
      {renderForm}
    </>
  );
}
