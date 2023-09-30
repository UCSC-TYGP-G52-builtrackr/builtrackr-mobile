import AsyncStorage from '@react-native-community/async-storage';
// Save data to local storage
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value)); // Store as JSON string
    console.log('Data successfully saved')
  } catch (error) {
    console.error('Error saving data:', error);
    throw error; // Rethrow the error for better error handling
  }
};

// Retrieve data from local storage
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {

      // Data is available, parse it as JSON
      console.log('Retrieved data:', value);
      return JSON.parse(value);
      
    } else {
      // Data is not available, return a default value or handle it as needed
      console.log('No data found');
      return null; // Return null or another appropriate value
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw error; // Rethrow the error for better error handling
  }
};
