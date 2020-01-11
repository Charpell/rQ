import React, { createContext, useReducer, useMemo } from 'react'
import axios from 'axios'

import authReducer from './authReducer'
import { getStorageData, setStorageData } from '../../utils/AsyncStorage'


export const AuthContext = createContext()

const baseUrl = 'https://rubeeq.herokuapp.com/rbq/v1/users'

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
  FORGOT_PASSWORD_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL
} from '../types'



const AuthState = props => {
  const initialState = {
    // token: getData(),
    isAuthenticated: null,
    user: null,
    error: null,
    userId: null,
    userDetail: {},
    phone: null,
    message: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState || {})


  const requestOtp = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`${baseUrl}/onboarding`, formData, config)
      dispatch({
        type: OTP_SUCCESS,
        payload: formData.phone
      })
      return res.data
    } catch (err) {
      dispatch({
        type: OTP_FAIL,
        payload: err.response.data.message
      })
      return err.response
    }
  }

  const verifyOtp = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`${baseUrl}/verify_phone`, formData, config)
      dispatch({
        type: VERIFY_OTP_SUCCESS,
        payload: res.data.data.userId
      })
      return res.data
    } catch (err) {
      dispatch({
        type: VERIFY_OTP_FAIL,
        payload: err.response.data.message
      })
      return err.response
    }
  }

  const getUserDetail = formData => {
    dispatch({
      type: USER_DETAILS,
      payload: formData
    })
  }

  // Register User
  const signup = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`${baseUrl}/profile`, formData, config)
      await setStorageData(res.data.data.access_token)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data.user
      })
      return res.data
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.message
      })
      return err.response
    }
  }

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`${baseUrl}/authorize`, formData, config)
      
      await setStorageData(res.data.data.access_token)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data.user
      })
      // loadUser()
      return res.data
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
      })
      return err.response
    }
  }

  // Logout
  const logout = () => dispatch({ type: LOGOUT })

  const forgetPassword = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`${baseUrl}/password_forgot`, formData, config)
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: { ...res.data, ...formData}
      })
      return res.data
    } catch (err) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: err.response
      })
      return err.response
    }
  }

  const passwordReset = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`${baseUrl}/password_reset`, formData, config)
      dispatch({
        type: PASSWORD_RESET_SUCCESS,
        payload: res.data
      })
      return res.data
    } catch (err) {
      dispatch({
        type: PASSWORD_RESET_FAIL,
        payload: err.response
      })
      return err.response
    }
  }


  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  const values = useMemo(() => {
    return {
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      userId: state.userId,
      userDetail: state.userDetail,
      phone: state.phone,
      message: state.message,
      signup,
      login,
      logout,
      clearErrors,
      requestOtp,
      verifyOtp,
      getUserDetail,
      state,
      forgetPassword,
      passwordReset
    }
  }, [state])


  return (
    <AuthContext.Provider
      value={values}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;


