import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  // Providerコンポーネントでルートコンポーネントをラップすることで、その配下にぶら下がる要素に対してもStoreを渡せる
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
