import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Routes';
import { createBrowserHistory } from 'history';
import { routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import { fork } from 'redux-saga/effects';
//import { reducer as formReducer } from 'redux-form';
import createStore from './store';

//TODO:: Import Reduces
import authReducer from './reducers/Auth';

//TODO:: Import Sagas
import authSagas from './sagas/Auth'

const reducer = {
  auth: authReducer
};

const sagas = [
  fork(authSagas)
]


const browserHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducer, sagas, browserHistory)}>
      <Router history={browserHistory}>
        <App location={browserHistory.location} Routes={RoutesComponent} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
