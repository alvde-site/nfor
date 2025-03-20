import dayjs from 'dayjs';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import {
  Link,
  List,
  Table,
  Collapse,
  ListItem,
  TableHead,
  TableBody,
  Typography,
  ListItemText,
} from '@mui/material';

import { dateToRange } from 'src/utils/format-date';

import { varAlpha } from 'src/theme/styles';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

import { removeEmptyData, type ConcertItemProps } from './utils';

// ----------------------------------------------------------------------

type ConcertTableRowProps = {
  row: ConcertItemProps;
};

export function ConcertTableRow({ row }: ConcertTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  const cleandeEmplDet = removeEmptyData(row.emplDet);

  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell
          sx={{
            minWidth: 38,
            flexShrink: 0,
            color: 'text.disabled',
            typography: 'caption',
            textAlign: 'center',
          }}
        >
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? (
              <Iconify width={22} icon="simple-line-icons:arrow-up" />
            ) : (
              <Iconify width={22} icon="simple-line-icons:arrow-down" />
            )}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          <Box gap={2} display="flex" alignItems="center">
            {dateToRange(row.concertDate)}
          </Box>
        </TableCell>

        <TableCell>
          <ListItemText
            primary={row.title}
            secondary={row.description}
            primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
            secondaryTypographyProps={{ mt: 0.5, noWrap: true, component: 'span' }}
            sx={{ flex: '1 0 auto' }}
          />
        </TableCell>

        <TableCell>
          <Box sx={{ flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
            <Label color={(row.approved && 'success') || 'error'}>
              {row.approved ? 'Утверждено' : 'Прогноз'}
            </Label>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow sx={{ background: 'var(--palette-action-hover)' }}>
        <TableCell colSpan={4} sx={{ padding: `${open ? '16px' : '0'}` }}>
          <Collapse in={open}>
            <Box>
              {row.concertDate.length && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" component="h5" sx={{ padding: '0 0 0 30px' }}>
                    Даты концертов:
                  </Typography>
                  <Typography variant="body1" sx={{ padding: '0 0 0 120px' }}>
                    {Array.isArray(row.concertDate) &&
                      row.concertDate.map((e) => dayjs(e).format('D.MM.YYYY')).join(', ')}
                  </Typography>
                </Box>
              )}
              {row.rehearsalDate.length && dayjs(row.rehearsalDate[0]).isValid() && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" component="h5" sx={{ padding: '0 0 0 30px' }}>
                    Даты репетиций:
                  </Typography>
                  <Typography variant="body1" sx={{ padding: '0 0 0 120px' }}>
                    {Array.isArray(row.rehearsalDate) &&
                      row.rehearsalDate.map((e) => dayjs(e).format('D.MM.YYYY')).join(', ')}
                  </Typography>
                </Box>
              )}
              {row.comments !== 'null' && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" component="h5" sx={{ padding: '0 0 0 30px' }}>
                    Комментарий:
                  </Typography>
                  <Typography variant="body1" sx={{ padding: '0 0 0 120px' }}>
                    {row.comments}
                  </Typography>
                </Box>
              )}
              {cleandeEmplDet.length && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" component="h5" sx={{ padding: '0 0 0 30px' }}>
                    Количество вызовов:
                  </Typography>
                  <Table
                    aria-label="Занятость"
                    size="small"
                    sx={{
                      '& th, & td': {
                        background: `${varAlpha('var(--palette-info-lighterChannel)', 0.3)}`,
                      },
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        {cleandeEmplDet[0].map((label: string, lIdx: number) => (
                          <TableCell key={lIdx}>{label}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cleandeEmplDet.slice(1).map((busyRow, brIdx) => (
                        <TableRow key={brIdx}>
                          <TableCell component="th">{busyRow[0]}</TableCell>
                          {busyRow.slice(1).map((busyNum: string, bnIdx: number) => (
                            <TableCell key={bnIdx}>{busyNum}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
              {!(row.details === 'null' && row.notes === 'null') && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" component="h5" sx={{ padding: '0 0 0 30px' }}>
                    Дополнительные ссылки:
                  </Typography>
                  <List sx={{ padding: '0 0 0 120px' }}>
                    {row.details !== 'null' && (
                      <ListItem>
                        <Link href={row.details} target="_blank">
                          О концерте
                        </Link>
                      </ListItem>
                    )}
                    {row.notes !== 'null' && (
                      <ListItem>
                        <Link href={row.notes} target="_blank">
                          Нотный материал
                        </Link>
                      </ListItem>
                    )}
                  </List>
                </Box>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <Popover
        open={!!openPopover}
        anchorEl={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={{
            p: 0.5,
            gap: 0.5,
            width: 140,
            display: 'flex',
            flexDirection: 'column',
            [`& .${menuItemClasses.root}`]: {
              px: 1,
              gap: 2,
              borderRadius: 0.75,
              [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
            },
          }}
        >
          <MenuItem onClick={handleClosePopover}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem onClick={handleClosePopover} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
