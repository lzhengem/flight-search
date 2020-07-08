import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { flightReducer } from './reducers'
import { getAmadeusSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(flightReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(getAmadeusSaga)

export { store }
