import axios from 'axios'

const baseUrl = 'https://rubeeq.herokuapp.com/rbq/v1'

import { getStorageData } from './AsyncStorage'

const setAuthorization =  async () => {
  // Apply authorization token to every request if logged in
  try {
    let data = await getStorageData()
    if (!data) delete axios.defaults.headers.common["access_token"];
    else axios.defaults.headers.common["access_token"] = `Bearer ${data}`;
  } catch (err) {
    return
  }
};

export default async function (url, formData) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  await setAuthorization()
  try {
    return await axios.post(`${baseUrl}/${url}`, formData, config);
  } catch (error) {
    return error.response
  }

}