import type { BoxProps } from '@mui/material/Box';

import ApexChart from 'react-apexcharts';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';

import { chartClasses } from './classes';

import type { ChartProps } from './types';

// ----------------------------------------------------------------------

export function Chart({
  sx,
  type,
  series,
  height,
  options,
  className,
  width = '100%',
  ...other
}: BoxProps & ChartProps) {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  useEffect(() => {
    setIsLoading(series?.every((e) => !e));
  }, [isLoading, series]);
  console.log('render');
  return (
    <Box
      dir="ltr"
      className={chartClasses.root.concat(className ? ` ${className}` : '')}
      sx={{
        width,
        height,
        flexShrink: 0,
        borderRadius: 1.5,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      {isLoading ? (
        <LinearProgress sx={{ width: '100%' }} />
      ) : (
        <ApexChart type={type} series={series} options={options} width="100%" height="100%" />
      )}
    </Box>
  );
}
