import {combineReducers} from '@reduxjs/toolkit';
import homeReducer from '../containers/Home/reducer';

const rootReducer = combineReducers({home: homeReducer})

export default rootReducer;