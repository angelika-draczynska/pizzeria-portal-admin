import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#283339' },
    secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={Dashboard}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/login'}
                  component={Login}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables`}
                  component={Tables}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter`}
                  component={Waiter}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/kitchen`}
                  component={Kitchen}
                />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
