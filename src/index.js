import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './routes';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <MuiThemeProvider>
        <Routes />
      </MuiThemeProvider>
      </Provider>
  </AppContainer>,
  document.getElementById('app'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
