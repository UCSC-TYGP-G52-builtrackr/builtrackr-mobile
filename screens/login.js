import {Text, View, StyleSheet, TextInput, Image, Pressable,TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { saveData } from './storage';
 
  const Login =({navigation})=> {
    // const [text, onChangeText] = React.useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigation();

    const clearErrorAndInputs = () => {
      setErrorMessage(''); // Clear the error message
      setEmail(''); // Reset email input to empty
      setPassword(''); // Reset password input to empty
    };

    const handleLogin = async () => {
      try {
        // Make a POST request to your server's authentication endpoint
        const loginData = {
          email: email,
          password: password,
        };

        const response = await fetch(
          "http://192.168.224.223:4000/api/site/checkCustomer",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );
          
        if (response.status === 200) {
          // Parse the response JSON data
          const data = await response.json();
          // Check if the login was successful based on the data received from the server
          if (data.success) {
            // Navigate to the "Sites" page
            if (data.userType === 'customer') {
              // Navigate to the "Sites" page for customers
              saveData('customerID', data.customerID.toString());
              navigation.navigate('Sites');
            } 
            else if (data.userType === 'supervisor') {
              saveData('employeeNo', data.employeeNo.toString());
              // Navigate to the "Supervisor Dashboard" for supervisors
              navigation.navigate("Supervisor Dashboard", { employeeID: data.employeeID });
            }
          } else {
            // Handle failed login (e.g., show an error message to the user)
            setErrorMessage(data.message);
            // navigation.navigate("Supervisor Dashboard");
          }
        } else {
          // Handle non-successful HTTP responses (e.g., 404 Not Found, 500 Internal Server Error)
          console.error('HTTP error:', response.status, response.statusText);
        }
      } catch (error) {
        // Handle API request error
        console.error('API request error:', error);
      }
    };

    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Image style={styles.logo} source={require('../assets/login.jpg')} />
  
        {/* Display the error message */}
        {errorMessage ? (
          <View style={styles.errorDisplay}>
            <TextInput
              value={errorMessage}
              editable={false}
              placeholder="Error"
            />
            <TouchableOpacity onPress={() => clearErrorAndInputs()}>
              <AntDesign name="closecircle" size={18} color="red" />
            </TouchableOpacity>
          </View>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter the email"
        />
        <TextInput 
          style={styles.input}
          onChangeText={setPassword} 
          value={password} 
          placeholder="Enter the password"
          secureTextEntry 
        />
        {/* <Pressable onPress={() =>navigation.navigate("Supervisor Dashboard")
            } style={styles.button}>
          <Text>Login</Text>
        </Pressable> */}
        <Pressable onPress={handleLogin} style={styles.button}>
          <Text>Login</Text>
        </Pressable>
      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    texts: {
      padding: 15,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 10
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      // marginTop: 50,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      width: 250,
    },
    errorDisplay: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 45,
      margin: 12,
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 10,
      padding: 10,
      width: 250,
    },
    logo: {
      height: 350,
      width: 300,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#ffcc00',
    },
  });
  

  export {Login};