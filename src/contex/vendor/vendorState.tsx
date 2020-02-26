import React, { useReducer, createContext, useState, useContext, useMemo } from 'react';
import axios from 'axios'
import apiCalls, { getAxios } from '../../utils/axios'
import vendorReducer from './vendorReducer'

export const VendorContext = createContext(null)
import { AuthContext } from '../auth/authState'

import {
  VENDORS_ERROR,
  BUY_VENDOR,
  GET_VENDOR_DETAILS,
  GET_VARIATION_DETAILS,
  SET_SERVICE,
  GET_ALL_SERVICE
} from '../types'

const VendorState = props => {
  const initialState = {
    userData: null,
    errors: null,
    variationDetails: [],
    vendorDetails: [],
    currentService: [],
    service: []
  }

  const [state, dispatch] = useReducer(vendorReducer, initialState)
  const [ loading, setLoading ] = useState(false)
  const authContext = useContext(AuthContext)
  const { user } = authContext

  
  const getElectricityDetails = async formData => {
    setLoading(true)
    const result = await apiCalls('services/electricity/verify', formData)
    setLoading(false)


    if (result.data.status === 'success') {
      dispatch({
        type: GET_VENDOR_DETAILS,
        payload: result.data.data
      })
      return result.status
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
    }
  }

  const getCabletvDetails = async formData => {
    setLoading(true)
    const result = await apiCalls('services/cabletv/verify', formData)
    setLoading(false)


    if (result.data.status === 'success') {
      dispatch({
        type: GET_VENDOR_DETAILS,
        payload: result.data.data
      })
      return result.status
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
    }
  }

  const payForElectricity = async formData => {
    console.log('formData', formData)
    setLoading(true)
    try {
      const result = await apiCalls('services/electricity/pay', formData)
      console.log('result', result)
      setLoading(false)


      if (result.data.status === 'success') {
        dispatch({
          type: BUY_VENDOR,
          payload: result.data.data
        })
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
      }
      return result.data
    } catch (error) {
      return error.message
    }
  }

  const payForCable = async formData => {
    setLoading(true)
    try {
      const result = await apiCalls('services/cabletv/pay', formData)
      setLoading(false)


      if (result.data.status === 'success') {
        dispatch({
          type: BUY_VENDOR,
          payload: result.data.data
        })
        return result.status
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
      }
      return result.data
    } catch (error) {
      return error.message
    }
  }

  const getDataDetails = async formData => {
    setLoading(true)
    const result = await apiCalls('services/data/verify', formData)
    setLoading(false)


    if (result.data.status === 'success') {
      dispatch({
        type: GET_VENDOR_DETAILS,
        payload: result.data.data
      })
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
    }
  }

  const payForData = async formData => {
    setLoading(true)
    try {
      const result = await apiCalls('services/data/vend', formData)
      setLoading(false)


      if (result.data.status === 'success') {
        dispatch({
          type: BUY_VENDOR,
          payload: result.data.data
        })
        return result.status
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
      }
      return result.data
    } catch (error) {
      return error.message
    }
  }

  const payForAirtime = async formData => {
    console.log('formData', formData)
    setLoading(true)
    const result = await apiCalls('services/airtime/pay', formData)
    setLoading(false)

    console.log("result", result)

    if (result.data.status === 'success') {
      dispatch({
        type: BUY_VENDOR,
        payload: result.data.data
      })
    } else {
      dispatch({
        type: VENDORS_ERROR,
        payload: result
      })
    }
  }

  const getVariationDetails = async formData => {
    setLoading(true)
    try {
      const result = await apiCalls('services/variation', formData)
      setLoading(false)

  
      if (result.data.status === 'success') {
        dispatch({
          type: GET_VARIATION_DETAILS,
          payload: result.data.data
        })
        return result.status
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const getAllService = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading(true)
    try {
      const result = await axios('https://rubeepay.herokuapp.com/rbq/v1/services', config)
      setLoading(false)

  
      if (result.data.status === 'success') {
        dispatch({
          type: GET_ALL_SERVICE,
          payload: result.data.data
        })
      } else {
        dispatch({
          type: VENDORS_ERROR,
          payload: result
        })
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const setService = formData => {
    dispatch({
      type: SET_SERVICE,
      payload: formData
    })
  }

  const values = useMemo(() => {
    return {
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
      payForAirtime,
      getVariationDetails,
      variationDetails: state.variationDetails,
      vendorDetails: state.vendorDetails,
      setService,
      currentService: state.currentService,
      getAllService,
      service: state.service
    }
  })



  return (
    <VendorContext.Provider
      value={values}
    >
      {props.children}
    </VendorContext.Provider>
  )
}

export default VendorState;