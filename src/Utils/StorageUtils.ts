import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStoreData = async (key: string, code: string) => {
  try {
    await AsyncStorage.setItem(key, code);
  } catch (error) {
    // Error saving data
  }
};
export const asyncRetrieveData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    // Error retrieving data
  }
};
