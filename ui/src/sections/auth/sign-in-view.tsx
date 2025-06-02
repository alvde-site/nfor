import type { Control } from 'react-hook-form';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

// import { useRouter } from 'src/routes/hooks';

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
  const { control, handleSubmit } = useForm<IFormInput>({ defaultValues });
  // const router = useRouter();

  const handleSignIn = useCallback((data: IFormInput) => {
    console.log(data);
    console.log(import.meta.env.VITE_AUTH_LOGIN, import.meta.env.VITE_AUTH_PASSWORD);
    // router.push('/');
  }, []);

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
