// src/redux/reducers/dashboardReducer.js
import { SET_DASHBOARD_DATA } from '../actions';

const initialState = {
  data: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
