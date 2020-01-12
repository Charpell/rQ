import {
  GET_ELECTRICITY_DETAILS,
  VENDORS_ERROR,
  BUY_ELECTRICITY,
  GET_CABLE_DETAILS,
  BUY_CABLE
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case GET_ELECTRICITY_DETAILS:
    case GET_CABLE_DETAILS:
      return {
        ...state,
        userData: action.payload,
        errors: null
      }
    case VENDORS_ERROR:
      return {
        ...state,
        userData: null,
        errors: action.payload
      };
      default: 
        return state
  }
}