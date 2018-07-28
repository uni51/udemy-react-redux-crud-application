import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  // Providerコンポーネントでルートコンポーネントをラップすることで、その配下にぶら下がる要素に対してもStoreを渡せる
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
