// src/redux/actions.js
export const SET_DASHBOARD_DATA = 'SET_DASHBOARD_DATA';
export const SET_USER = 'SET_USER';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const setDashboardData = (data) => ({
  type: SET_DASHBOARD_DATA,
  payload: data,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
