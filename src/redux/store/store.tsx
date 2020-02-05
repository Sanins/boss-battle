import { createStore } from 'redux';
import reducers from './../reducers/CounterReducer';

export default createStore(reducers);