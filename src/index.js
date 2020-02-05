import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import reducer from './store/reducers'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
,document.getElementById('root'));

serviceWorker.unregister();
