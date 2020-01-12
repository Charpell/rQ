import React, { useReducer, createContext, useState } from 'react';

import axios from '../../utils/axios'
import vendorReducer from './vendorReducer'

export const VendorContext = createContext(null)

import {
  GET_ELECTRICITY_DETAILS,
  VENDORS_ERROR,
  BUY_ELECTRICITY,
  GET_CABLE_DETAILS,
  BUY_CABLE
} from '../types'

const VendorState = props => {
  const initialState = {
    userData: null,
    errors: null
  }

  const [state, dispatch] = useReducer(vendorReducer, initialState)
  const [ loading, setLoading ] = useState(false)

  
  const getElectricityDetails = async formData => {
    setLoading(true)
    const result = await axios('services/electricity/meter/verify', formData)

    if (result.data.status === 'success') {
      dispatch({
        type: GET_ELECTRICITY_DETAILS,
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
        type: GET_CABLE_DETAILS,
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
        getCabletvDetails
      }}
    >
      {props.children}
    </VendorContext.Provider>
  )
}

export default VendorState;