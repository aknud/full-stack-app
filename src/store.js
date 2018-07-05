import {createStore} from 'redux';
import reducer from './ducks/users';

let store = createStore(reducer)

export default store;