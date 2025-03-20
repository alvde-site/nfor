import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

// import { fToNow } from 'src/utils/format-time';

import { useState } from 'react';

// import type { PostItemProps } from '../blog/post-item';
import { Collapse, IconButton } from '@mui/material';
// import AnnouncementIcon from '@mui/icons-material/Announcement';

import { useNavigate } from 'react-router-dom';

import { dateToRange } from 'src/utils/format-date';

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import type { ConcertItemProps } from '../concert/utils';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: ConcertItemProps[];
};

export function AnalyticsNews({ title, subheader, list, ...other }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/concert');
  };
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 1 }} />

      <Scrollbar>
        <Box sx={{ minWidth: 744 }}>
          {list.map((post) => (
            <PostItem key={post.id} item={post} />
          ))}
        </Box>
      </Scrollbar>

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
          onClick={handleClick}
        >
          Все концерты
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

function PostItem({ sx, item, ...other }: BoxProps & { item: Props['list'][number] }) {
  const [open, setOpen] = useState(false);
  // const theme = useTheme();
  // console.log(theme);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Box
        sx={{
          py: 2,
          px: 3,
          gap: 2,
          display: 'flex',
          alignItems: 'center',
          borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
          ...sx,
        }}
        {...other}
        onClick={handleClick}
      >
        <Avatar
          variant="rounded"
          alt={item.title}
          src={item.coverUrl}
          sx={{ width: 48, height: 48, flexShrink: 0 }}
        />
        <Box sx={{ minWidth: 38, flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
          <IconButton aria-label="Сообщение">
            {item.comments !== 'null' && (
              <Iconify width={22} icon="ic:baseline-announcement" sx={{ color: 'info.main' }} />
            )}
          </IconButton>
        </Box>

        <ListItemText
          primary={item.title}
          secondary={item.description}
          primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
          secondaryTypographyProps={{ mt: 0.5, noWrap: true, component: 'span' }}
          sx={{ flex: '1 0 auto' }}
        />

        <Box sx={{ flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
          <Label color={(item.approved && 'success') || 'error'}>
            {item.approved ? 'Утверждено' : 'Прогноз'}
          </Label>
        </Box>

        <Box sx={{ flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
          {/* {fToNow(item.concertDate)} */}
          {dateToRange(item.concertDate)}
        </Box>
      </Box>
      {item.comments !== 'null' && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={{
              py: 2,
              px: 3,
              gap: 2,
              display: 'flex',
              alignItems: 'center',
              fontStyle: 'italic',
              backgroundColor: (theme) =>
                `${varAlpha(theme.vars.palette.info.lighterChannel, 0.48)}`,
              borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
              ...sx,
            }}
            {...other}
          >
            {item.comments}
          </Box>
        </Collapse>
      )}
    </Box>
  );
}
