import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import reducer from './store/reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
,document.getElementById('root'));

serviceWorker.unregister();
