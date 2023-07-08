import {combineReducers} from '@reduxjs/toolkit';
import bookingReducer from './slices/booking';

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export default rootReducer;
