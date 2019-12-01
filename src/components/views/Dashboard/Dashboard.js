import React from 'react';
import styles from './Dashboard.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// const demoContent = [
//   { id: '1', status: 'free', order: null },
//   { id: '2', status: 'thinking', order: null },
//   { id: '3', status: 'ordered', order: 123 },
//   { id: '4', status: 'prepared', order: 234 },
//   { id: '5', status: 'delivered', order: 345 },
//   { id: '6', status: 'paid', order: 456 }
// ];

function createData(id, date, name, shipTo, order, amount) {
  return { id, date, name, shipTo, order, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'Pizza Vege',
    31.44
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'Pizza Capriciosa, Coffee',
    20.99
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Tom Scholz',
    'Boston, MA',
    'Pizza Broccoli, Pepsi',
    27.81
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'Shrimps Pasta',
    65.39
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'Pizza Pepperoni',
    21.79
  ),
];

const Dashboard = () => (
  <div className={styles.component}>
    <Grid className={styles.center} container spacing={6}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={styles.paper}>
          <Typography
            component="h2"
            variant="h6"
            color="secondary"
            gutterBottom
          >
            Pending Orders
          </Typography>
          <Typography component="p" variant="h4">
            3
          </Typography>
          <Typography color="textSecondary">on 28 Nov, 2019</Typography>
          <div className={styles.showMore}>
            <Link color="secondary" href="#">
              Show more
            </Link>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={styles.paper}>
          <Typography
            component="h2"
            variant="h6"
            color="secondary"
            gutterBottom
          >
            Total Orders
          </Typography>
          <Typography component="p" variant="h4">
            38
          </Typography>
          <Typography color="textSecondary">on 28 Nov, 2019</Typography>
          <div className={styles.showMore}>
            <Link color="secondary" href="#">
              Show more
            </Link>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={styles.paper}>
          <Typography
            component="h2"
            variant="h6"
            color="secondary"
            gutterBottom
          >
            Weekly Orders
          </Typography>
          <Typography component="p" variant="h4">
            409
          </Typography>
          <Typography color="textSecondary">28 Nov - 5 Dec, 2019</Typography>
          <div className={styles.showMore}>
            <Link color="secondary" href="#">
              Show more
            </Link>
          </div>
        </Paper>
      </Grid>
    </Grid>
    <Typography
      className={styles.table}
      component="h2"
      variant="h6"
      gutterBottom
    >
      Orders In-Progress
    </Typography>
    <Paper>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Order</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.order}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Typography
      className={styles.table}
      component="h2"
      variant="h6"
      gutterBottom
    >
      Booked Tables
    </Typography>
    <Paper>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Order</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.order}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
