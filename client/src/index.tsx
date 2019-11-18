import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    /* devToolsEnhancer({
        shouldHotReload: true,
        shouldCatchErrors: true,
        features: {
            persist: true
        },
        trace: true
    }) */
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);