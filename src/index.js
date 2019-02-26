import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { notes } from './reducers';
import * as serviceWorker from './serviceWorker';
import { noteSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(notes, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(noteSaga)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
