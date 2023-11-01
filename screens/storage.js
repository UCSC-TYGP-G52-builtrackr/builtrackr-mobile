import AsyncStorage from '@react-native-community/async-storage';
// Save data to local storage with multiple key-value pairs
export const saveData = async (data) => {
  try {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        await AsyncStorage.setItem(key, JSON.stringify(value));
      }
    }
    console.log('Data successfully saved');
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};

// Retrieve data from local storage
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('storage',key)

      // Data is available, parse it as JSON
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

