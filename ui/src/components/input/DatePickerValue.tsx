import type { Dayjs } from 'dayjs';
import type { Dispatch, SetStateAction } from 'react';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

type TIputValue = Dayjs | null | undefined;
type TSetInputValue = Dispatch<SetStateAction<Dayjs | null>>;

export default function DatePickerValue({
  value,
  setValue,
}: {
  value: TIputValue;
  setValue: TSetInputValue;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ mb: { xs: 3, md: 5 } }}>
        <DatePicker
          label="Выбрать другую дату"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          localeText={{
            cancelButtonLabel: 'Отмена',
          }}
          slotProps={{
            toolbar: { hidden: true },
          }}
          minDate={dayjs('2024-09-14')}
          maxDate={dayjs('2025-07-31')}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
