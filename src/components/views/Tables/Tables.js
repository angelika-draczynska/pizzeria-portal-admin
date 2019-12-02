import React from 'react';
import styles from './Tables.module.scss';

import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(id, date, name, time, starter, tableNumber) {
  return { id, date, name, time, starter, tableNumber };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', '17:00 - 18:00', 'Bread', 5),
  createData(1, '16 Mar, 2019', 'Paul McCartney', '18:00 - 18:30', '-', 4),
  createData(2, '16 Mar, 2019', 'Tom Scholz', '19:00 - 21:00', '-', 3),
  createData(3, '16 Mar, 2019', 'Michael Jackson', '17:00 - 18:00', '-', 2),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', '17:00 - 18:00', '-', 1),
];

const Tables = () => (
  <div className={styles.component}>
    <Paper>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Starter</TableCell>
            <TableCell align="right">Table Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                {' '}
                <Link
                  to={`${process.env.PUBLIC_URL}/tables/booking/${row.id}`}
                  activeClassName="active"
                >
                  {row.name}{' '}
                </Link>
              </TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.starter}</TableCell>
              <TableCell align="right">{row.tableNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;
