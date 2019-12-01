import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchTablesStatus, getOrderState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
  status: getOrderState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTablesStatus: () => dispatch(fetchTablesStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);