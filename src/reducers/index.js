import { combineReducers } from 'redux';
import store from './stored';
import pagination from './pagination';
import issues from './issues';

export default combineReducers({
    issues,
    store,
    pagination
})