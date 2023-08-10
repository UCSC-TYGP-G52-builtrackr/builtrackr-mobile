import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    Pressable,
    onPress,
    Button,
  } from 'react-native';

  import React from 'react';
import { StatusBar } from 'expo-status-bar';
 
  
  const Login =({navigation})=> {
    const [text, onChangeText] = React.useState('');
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Image style={styles.logo} source={require('../assets/login.jpg')} />
  
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter the email"
        />
        <TextInput style={styles.input} placeholder="Enter the password" />
        <Pressable style={styles.button}>
          <Text>Login</Text>
        </Pressable>
        <Text style={styles.texts}> If you don' t Have account<Button title = 'Signup' onPress = {()=>navigation.navigate("Signup")}/></Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    texts: {
      padding: 15,
    },
    title: {
      fontWeight: 'bold',
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