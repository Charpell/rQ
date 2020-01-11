import { AsyncStorage } from "react-native";

import { TOKEN_KEY, USER_KEY } from '../config/keys'



export const getStorageData = async () => {
  try {
      let token = await AsyncStorage.getItem(TOKEN_KEY);

      if (token !== null) return token;
      else return null;

  } catch (error) {
      throw new Error(error)
  }
};

export const setStorageData = async (data) => {
  try {
        await AsyncStorage.setItem(TOKEN_KEY, data);
  } catch (error) {
      throw new Error(error)
  }
};
