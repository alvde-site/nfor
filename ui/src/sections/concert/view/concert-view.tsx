import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import { LinearProgress } from '@mui/material';
// import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

// import { _users } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

// import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { TableEmptyRows } from '../table-empty-rows';
// import { TableNoData } from '../table-no-data';
import { ConcertTableRow } from '../concert-table-row';
import { emptyRows, createConcertList } from '../utils';
import { ConcertTableHead } from '../concert-table-head';

import type { TConcertItemProps } from '../utils';
// import { ConcertTableToolbar } from '../concert-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';

// import type { UserProps } from '../user-table-row';

dayjs.extend(utc);
dayjs.extend(timezone);

// ----------------------------------------------------------------------

export function ConcertView({ formattedData }: any) {
  const table = useTable({ formattedData });
  const [concertData, setConcertData] = useState<TConcertItemProps[]>([]);

  useEffect(() => {
    function checkData() {
      if (formattedData.length) {
        const conData = createConcertList(formattedData);
        setConcertData(conData);
      }
    }

    checkData();
  }, [formattedData]);

  // const [filterName, setFilterName] = useState('');

  // const dataFiltered: UserProps[] = applyFilter({
  //   inputData: _users,
  //   comparator: getComparator(table.order, table.orderBy),
  //   filterName,
  // });

  // const notFound = !dataFiltered.length && !!filterName;

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Концерты
        </Typography>
        {/* <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New user
        </Button> */}
      </Box>

      {formattedData.length && !table.isLoading ? (
        <Card>
          {/* <ConcertTableToolbar
          numSelected={table.selected.length}
          filterName={filterName}
          onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterName(event.target.value);
            table.onResetPage();
          }}
        /> */}

          <Scrollbar>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 800 }}>
                <ConcertTableHead
                  // order={table.order}
                  // orderBy={table.orderBy}
                  // rowCount={_users.length}
                  // numSelected={table.selected.length}
                  // onSort={table.onSort}
                  // onSelectAllRows={(checked) =>
                  //   table.onSelectAllRows(
                  //     checked,
                  //     _users.map((user) => user.id)
                  //   )
                  // }
                  headLabel={[
                    // { id: '' },
                    { id: 'date', label: 'Дата' },
                    { id: 'name', label: 'Название' },
                    // { id: 'company', label: 'Company' },
                    // { id: 'role', label: 'Role' },
                    // { id: 'isVerified', label: 'Verified', align: 'center' },
                    { id: 'status', label: 'Статус' },
                  ]}
                />
                {
                  <TableBody>
                    {/* {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row) => ( */}
                    {/* <ConcertTableRow
                  key={row.id}
                  row={row}
                  selected={table.selected.includes(row.id)}
                  onSelectRow={() => table.onSelectRow(row.id)}
                /> */}
                    {concertData
                      .slice(1)
                      .slice(
                        table.page * table.rowsPerPage,
                        table.page * table.rowsPerPage + table.rowsPerPage
                      )
                      .map((row) => (
                        <ConcertTableRow
                          key={row.id}
                          row={row}
                          // selected={table.selected.includes(row.id)}
                          // onSelectRow={() => table.onSelectRow(row.id)}
                        />
                      ))}

                    <TableEmptyRows
                      height={92}
                      emptyRows={emptyRows(table.page, table.rowsPerPage, concertData.length - 1)}
                    />

                    {/* {notFound && <TableNoData searchQuery={filterName} />} */}
                  </TableBody>
                }
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            component="div"
            page={table.page}
            count={concertData.length - 1}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            labelDisplayedRows={table.defaultLabelDisplayedRows}
            labelRowsPerPage="Строк на стр.:"
          />
        </Card>
      ) : (
        <LinearProgress sx={{ margin: '50px auto 0', width: '90%' }} />
      )}
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

export function useTable({ formattedData }: any) {
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);

  const localDataLength = formattedData.length - 1;

  const getCurrentConcertIndex = useCallback(() => {
    const lastConcert = formattedData
      .map((e: string[][], i: number) => (i ? dayjs(e[2][e[2].length - 1]) : dayjs(0)))
      .slice(1)
      .reverse()
      .findIndex((d: Dayjs) => dayjs().startOf('day') >= d);
    const currentConcertIndex = Math.floor(
      (localDataLength - (lastConcert >= 0 ? lastConcert : localDataLength)) / rowsPerPage
    );
    return currentConcertIndex >= 0 ? currentConcertIndex : 0;
  }, [formattedData, localDataLength, rowsPerPage]);

  const [page, setPage] = useState(getCurrentConcertIndex);

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onSetDefaultPage = useCallback(() => {
    const curConcert = getCurrentConcertIndex();
    setPage(curConcert);
  }, [getCurrentConcertIndex]);

  const defaultLabelDisplayedRows = useCallback(
    ({ from, to, count }: any) => (count !== -1 ? `${from}–${to} из ${count}` : 'Концертов нет'),
    []
  );

  const onChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setIsLoading(true);
  }, []);

  useEffect(() => {
    onSetDefaultPage();
    setIsLoading(false);
  }, [onSetDefaultPage, rowsPerPage, isLoading]);

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
    defaultLabelDisplayedRows,
    onSetDefaultPage,
    isLoading,
  };
}
