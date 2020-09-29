import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { covid } from './covid.reducer';
import { country } from './country.reducer';

const rootReducer = combineReducers({
    alert,
    covid,
    country
});

export default rootReducer;