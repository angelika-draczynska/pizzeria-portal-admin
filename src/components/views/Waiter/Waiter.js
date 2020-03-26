import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    updateTableStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOf(PropTypes.bool, PropTypes.string),
    }),
  };

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  handleClick(e, tableId, status, order) {
    e.preventDefault();

    if (status === 'free') {
      status = 'thinking';
    } else if (status === 'thinking') {
      status = 'ordered';
    } else if (status === 'ordered') {
      status = 'prepared';
    } else if (status === 'prepared') {
      status = 'delivered';
    } else if (status === 'delivered') {
      status = 'paid';
    } else if (status === 'paid') {
      status = 'free';
    }

    this.props.updateTableStatus(tableId, status, order);
  }

  renderActions(status, id, order){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={(e) => this.handleClick(e, id, status, order)}>thinking</Button>
            <Button onClick={(e) => this.handleClick(e, id, status, order)}>new order</Button>
            
          </>
        );

      case 'thinking':
        return (
          <Button onClick={(e) => this.handleClick(e, id, status, order)}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={(e) => this.handleClick(e, id, status, order)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={(e) => this.handleClick(e, id, status, order)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={(e) => this.handleClick(e, id, status, order)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={(e) => this.handleClick(e, id, status, order)}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const {
      loading: { active, error },
      tables,
    } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    {row.order && (
                      <Button
                        to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}
                      >
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id, row.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
