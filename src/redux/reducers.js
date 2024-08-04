import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import dashboardReducer from './reducers/dashboardReducer';

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
