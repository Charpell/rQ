import {
  BUY_VENDOR,
  VENDORS_ERROR,
  GET_VENDOR_DETAILS,
  GET_VARIATION_DETAILS,
  SET_SERVICE,
  GET_ALL_SERVICE
} from '../types'

function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

export default (state, action) => {
  switch(action.type) {
    case BUY_VENDOR:
      return {
        ...state,
        userData: action.payload,
        errors: null
      }
    case GET_VENDOR_DETAILS:
      return {
        ...state,
        vendorDetails: action.payload,
        errors: null
      }
    case VENDORS_ERROR:
      return {
        ...state,
        userData: null,
        errors: action.payload
      };
    case GET_VARIATION_DETAILS:
      return {
        ...state,
        variationDetails: action.payload.map(data => ( renameKeys(data, {name: "value" }))),
        errors: null
      }
    case SET_SERVICE:
      return {
        ...state,
        currentService: action.payload
      }
    case GET_ALL_SERVICE:
      return {
        ...state,
        service: action.payload,
        errors: null
      }
      default: 
        return state
  }
}