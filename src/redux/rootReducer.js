import { combineReducers } from 'redux';
import jobRequest from './reducers/jobRequest';

const rootReducer = combineReducers({
    jobRequest,
});

export default rootReducer;
