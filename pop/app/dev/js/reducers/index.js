import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
//import bmiReducer from './reducer-bmi';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store - using combineReducers function from REDUX
 * combineReducers function takes an object as properties.
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer //,
    //BMI:bmiReducer
});

export default allReducers
