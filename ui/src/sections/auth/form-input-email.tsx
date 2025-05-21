import type { Control } from 'react-hook-form';

import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import type { IFormInput } from './sign-in-view';

type TFormInputEmail = {
  name: 'email' | 'password';
  label: string;
  control?: Control<IFormInput, any, IFormInput>;
};

export function FormInputEmail({ name, control, label }: TFormInputEmail) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <TextField
          type="email"
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          name={name}
          label={label}
          //   defaultValue="hello@gmail.com"
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 3 }}
        />
      )}
    />
  );
}
