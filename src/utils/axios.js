import axios from 'axios'

const baseUrl = 'https://rubeepay.herokuapp.com/rbq/v1'

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
      'Content-Type': 'application/json',
      'access_token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDgyMTI2ZDM0MDUyMDA2ODQ0NGI0ZSIsInJvbGUiOiJzdXBlckFkbWluIiwidXNlcklkIjoiUlEyYTFlNDkxMC01MDEzLTExZWEtODczOC1lZDlhYzAyZjllMGQiLCJpYXQiOjE1ODIwNDk1OTV9.N-TKbgb5A2S9wo9MjVKa3pmTGRSGfHB1jVPrsXMp3ns'
    }
  }
  
  // await setAuthorization()
  try {
    return await axios.post(`${baseUrl}/${url}`, formData, config);
  } catch (error) {
    return error.response
  }

}