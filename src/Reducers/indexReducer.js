import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import { reducerTest as test } from './reducerTest';


const allReducers = {
    test,
    router: routerReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
