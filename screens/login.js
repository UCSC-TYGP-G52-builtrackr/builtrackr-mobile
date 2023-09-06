import {Text,View,StyleSheet,TextInput,Image,Pressable,onPress,Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
 
  const Login =({navigation})=> {
    // const [text, onChangeText] = React.useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigation();

    const handleLogin = async () => {
      try {
        // Make a POST request to your server's authentication endpoint
        const loginData = {
          email: email,
          password: password,
        };

        const response = await fetch(
          "http://192.168.8.100:4000/api/site/checkCustomer",
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
            navigation.navigate('Sites', { customerID: data.customerID });
          } else {
            // Handle failed login (e.g., show an error message to the user)
            navigation.navigate("Supervisor Dashboard");
            // console.error('Login failed:', data.message);
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
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Image style={styles.logo} source={require('../assets/login.jpg')} />
  
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
      marginTop: 50,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
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