import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  OTP_SUCCESS,
  OTP_FAIL,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  USER_DETAILS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL
} from '../types'

import { AsyncStorage } from 'react-native'


export default (state, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case OTP_FAIL:
    case VERIFY_OTP_FAIL:
    case LOGOUT:
      AsyncStorage.clear()
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      }
    case OTP_SUCCESS:
      return {
        ...state,
        phone: action.payload
      }
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        userId: action.payload
      }
    case USER_DETAILS: 
      return {
        ...state,
        userDetail: action.payload
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}