import { combineReducers, createStore, ReducersMapObject } from 'redux'
import { counterReducer, CounterState } from './counter'

const reducers: ReducersMapObject = {
  counter: counterReducer
}

export interface RootState {
  counter: CounterState
}

export default createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
