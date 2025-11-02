import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer); // higher order function

export default store;

