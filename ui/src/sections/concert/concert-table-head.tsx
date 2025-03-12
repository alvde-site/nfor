// import Box from '@mui/material/Box';
// import { IconButton } from '@mui/material';
import TableRow from '@mui/material/TableRow';
// import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
// import TableSortLabel from '@mui/material/TableSortLabel';

// import { Iconify } from 'src/components/iconify';
// import { useState } from 'react';

// import { visuallyHidden } from './utils';

// ----------------------------------------------------------------------

type ConcertTableHeadProps = {
  // orderBy: string;
  // rowCount: number;
  // numSelected: number;
  // order: 'asc' | 'desc';
  // onSort: (id: string) => void;
  headLabel: Record<string, any>[];
  // onSelectAllRows: (checked: boolean) => void;
};

export function ConcertTableHead({
  // order,
  // onSort,
  // orderBy,
  // rowCount,
  headLabel,
  // numSelected,
  // onSelectAllRows,
}: ConcertTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell
        // padding="checkbox"
        >
          {/* <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? (
              <Iconify width={22} icon="simple-line-icons:arrow-up" />
            ) : (
              <Iconify width={22} icon="simple-line-icons:arrow-down" />
            )}
          </IconButton> */}
        </TableCell>

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            // sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            {/* <TableSortLabel
              hideSortIcon
              // active={orderBy === headCell.id}
              // direction={orderBy === headCell.id ? order : 'asc'}
              // onClick={() => onSort(headCell.id)}
            > */}
            {headCell.label}
            {/* {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null} */}
            {/* </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
