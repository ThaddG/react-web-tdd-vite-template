import { nanoid } from 'nanoid';
import React from 'react';

export const signup =
  ({ email, password, firstName, lastName }) =>
  async (dispatch) => {
    // api.post('/signup')
    // .then(() => {
    dispatch({ type: AuthActionTypes.SIGNUP });
    // })
    // .catch(err => {
    dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: 'err.message' });
    // })
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    // api.post('/login')
    // .then(() => {
    dispatch({ type: AuthActionTypes.LOGIN });
    // })
    // .catch(err => {
    dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: 'err.message' });
    // })
  };

export const logout = () => (dispatch) => {
  dispatch({ type: AuthActionTypes.LOGOUT });
};

export const clearAuthMessage = () => (dispatch) =>
  dispatch({ type: AuthActionTypes.CLEAR_AUTH_MESSAGE });
