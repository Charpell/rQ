import React, { useReducer, createContext, useState, useContext } from 'react';

import axios from '../../utils/axios'
import vendorReducer from './vendorReducer'

export const VendorContext = createContext(null)
import { AuthContext } from '../auth/authState'

import {
  VENDORS_ERROR,
  BUY_VENDOR,
  GET_VENDOR_DETAILS,
} from '../types'

const VendorState = props => {
  const initialState = {
    userData: null,
    errors: null
  }

  const [state, dispatch] = useReducer(vendorReducer, initialState)
  const [ loading, setLoading ] = useState(false)
  const authContext = useContext(AuthContext)
  const { user } = authContext

  
  const getElectricityDetails = async formData => {
    setLoading(true)
    const result = await axios('services/electricity/meter/verify', formData)

    if (result.data.status === 'success') {
      dispatch({
        type: GET_VENDOR_DETAILS,
        payload: result.data.data
      })
      setLoading(false)
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
      setLoading(false)
    }
  }

  const getCabletvDetails = async formData => {
    setLoading(true)
    const result = await axios('services/cabletv/verify', formData)

    if (result.data.status === 'success') {
      dispatch({
        type: GET_VENDOR_DETAILS,
        payload: result.data.data
      })
      setLoading(false)
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
      setLoading(false)
    }
  }

  const payForElectricity = async formData => {
    setLoading(true)
    try {
      const result = await axios('services/electricity/vend', formData)

      if (result.data.status === 'success') {
        dispatch({
          type: BUY_VENDOR,
          payload: result.data.data
        })
        setLoading(false)
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
        setLoading(false)
      }
      return result.data
    } catch (error) {
      return error.message
    }
  }

  const payForCable = async formData => {
    setLoading(true)
    try {
      const result = await axios('services/cabletv/vend', formData)

      if (result.data.status === 'success') {
        dispatch({
          type: BUY_VENDOR,
          payload: result.data.data
        })
        setLoading(false)
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
        setLoading(false)
      }
      return result.data
    } catch (error) {
      return error.message
    }
  }

  const getDataDetails = async formData => {
    setLoading(true)
    const result = await axios('services/data/verify', formData)

    if (result.data.status === 'success') {
      dispatch({
        type: GET_VENDOR_DETAILS,
        payload: result.data.data
      })
      setLoading(false)
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
      setLoading(false)
    }
  }

  const payForData = async formData => {
    setLoading(true)
    try {
      const result = await axios('services/data/vend', formData)

      if (result.data.status === 'success') {
        dispatch({
          type: BUY_VENDOR,
          payload: result.data.data
        })
        setLoading(false)
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
        setLoading(false)
      }
      return result.data
    } catch (error) {
      return error.message
    }
  }

  const payForAirtime = async formData => {
    console.log("here")
    setLoading(true)
    const result = await axios('services/airtime/vend', formData)
    console.log("result", result)

    if (result.data.status === 'success') {
      dispatch({
        type: BUY_VENDOR,
        payload: result.data.data
      })
      setLoading(false)
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
      setLoading(false)
    }
  }



  return (
    <VendorContext.Provider
      value={{
        userData: state.userData,
        errors: state.errors,
        loading,
        getElectricityDetails,
        state,
        getCabletvDetails,
        payForElectricity,
        payForCable,
        user,
        getDataDetails,
        payForData,
        payForAirtime
      }}
    >
      {props.children}
    </VendorContext.Provider>
  )
}

export default VendorState;