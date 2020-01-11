import axios from 'axios';

import { getStorageData } from './AsyncStorage'

export const setAuthorization =  async () => {
  // Apply authorization token to every request if logged in
  try {
    let data = await getStorageData()
    console.log('data', data)
    if (!data) delete axios.defaults.headers.common["Authorization"];
    else axios.defaults.headers.common["Authorization"] = `Bearer ${data}`;
  } catch (err) {
    return
  }
};