import {combineReducers} from 'redux';
import {utils} from './utils';
import {user} from './user';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    routing : routerReducer,
    user,
    utils
});
