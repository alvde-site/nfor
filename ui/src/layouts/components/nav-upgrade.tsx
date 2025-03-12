import type { StackProps } from '@mui/material/Stack';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------------

export function NavUpgrade({ sx, ...other }: StackProps) {
  const navigate = useNavigate();
  const handleUpdate = useCallback(() => {
    navigate('/');
    localStorage.removeItem('initData');
    window.location.reload();
  }, [navigate]);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ mb: 4, textAlign: 'center', ...sx }}
      {...other}
    >
      {/* <Typography
        variant="h6"
        sx={(theme) => ({
          ...textGradient(
            `to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.warning.main}`
          ),
        })}
      >
        More features?
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
        {`From only `}
        <Box component="strong" sx={{ color: 'text.primary' }}>
          $69
        </Box>
      </Typography>

      <Box
        component="img"
        alt="Minimal dashboard"
        src="/assets/illustrations/illustration-dashboard.webp"
        sx={{ width: 200, my: 2 }}
      /> */}

      {/* <Button
        href="https://material-ui.com/store/items/minimal-dashboard/"
        target="_blank"
        variant="contained"
        color="inherit"
      >
        Upgrade to Pro
      </Button> */}
      <Button
        // href="https://material-ui.com/store/items/minimal-dashboard/"
        // target="_blank"
        onClick={handleUpdate}
        variant="contained"
        color="inherit"
      >
        Обновить данные
      </Button>
    </Box>
  );
}
