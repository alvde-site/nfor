import { useState } from 'react';
import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';

import { Iconify } from 'src/components/iconify';

import type { TFormInputEmail } from './sign-in-view';

export function FormInputPassword({ name, control, label }: TFormInputEmail) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Требуется ввести пароль',
        minLength: {
          value: 8,
          message: 'Минимальная длина пароля 8 символов',
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <TextField
          required
          helperText={error?.message}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          name={name}
          label={label}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          // InputLabelProps={{ shrink: true }}
          sx={{ mb: 3 }}
        />
      )}
    />
  );
}
