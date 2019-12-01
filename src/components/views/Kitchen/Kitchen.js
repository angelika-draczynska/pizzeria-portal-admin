import React from 'react';
import styles from './Kitchen.module.scss';

import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(id, time, name, order, comments, tableNumber) {
  return { id, time, name, order, comments, tableNumber };
}

const rows = [
  createData(0, '18:36', 'Elvis Presley', 'Pizza Vegetable, Panini', 'Pizza without Jalapenos', 5),
  createData(1, '18:37', 'Paul McCartney', 'Shrimps Pasta, Pepsi', '-', 4),
  createData(2, '19:05', 'Tom Scholz', 'Pizza Pepperoni, Pizza Margherita', '-', 3),
  createData(3, '19:15', 'Michael Jackson', 'Pizza Margherita', '-', 2),
  createData(4, '19:18', 'Bruce Springsteen', 'Pizza Margherita', '-', 1),
];

const Kitchen = () => (
  <div className={styles.component}>
    <Paper>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell align="right">Table Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                {' '}
                <Link
                  to={`${process.env.PUBLIC_URL}/kitchen/order/${row.id}`}
                >
                  {row.name}{' '}
                </Link>
              </TableCell>
              <TableCell>{row.order}</TableCell>
              <TableCell>{row.comments}</TableCell>
              <TableCell align="right">{row.tableNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;
