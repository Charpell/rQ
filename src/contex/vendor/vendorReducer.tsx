import {
  BUY_VENDOR,
  VENDORS_ERROR,
  GET_VENDOR_DETAILS
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case BUY_VENDOR:
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