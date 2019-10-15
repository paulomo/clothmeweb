import {combineReducers} from 'redux';
import user from './user.reducer';
import signin from './signin.reducer';
import signup from './signup.reducer';

const authReducers = combineReducers({
    user,
    signin,
    signup
});

export default authReducers;