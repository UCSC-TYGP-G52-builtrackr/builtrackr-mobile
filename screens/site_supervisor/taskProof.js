import {Text,View,StyleSheet,TextInput,Image,Pressable,TouchableOpacity,ScrollView} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar,Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import client from "../../api/client";

const TaskProof = ({navigation, route }) => {
  
  const [image, setImage]=useState(null);
  const[taskId,setTaskId]=useState(route.params.taskId);
  const task=route.params?.task || 'No data received';
  const[comment,setComment]=useState('');

    const handleSubmit=async()=>{
      const formData = new FormData();
      formData.append('image', {
        uri: image.image,
        type: 'image/jpeg', // Adjust the type according to your image format
        name: 'image.jpg'
      });
      try {
        const response = await client.post(
          '/api/upload/task',formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        if (response.status === 200) {
          const imageName=response.data;
          try {
            const response = await fetch(
              // "http://192.168.224.223:4000/api/task/addTaskProofOfSupervisor",
              "http://192.168.8.100:4000/api/task/addTaskProofOfSupervisor",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                  taskId:taskId,
                  imageName:imageName,
                  comment:comment }),
              }
            );

          }
          catch (error) {
            
          }
          }
      } catch (error) {
        console.error('Axios error:', error);
      
        // Check if there are additional error details available
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request:', error.request);
        } else {
          console.error('Other error:', error.message);
        }
    }
    navigation.navigate('SupervisorDashboard', { reverse: 0 });
  }
  
  useEffect(() => {
    if (route.params.image) setImage(route.params);
  }, [route.params]);
  //console.log(route.params)



  return (
    <ScrollView>
    <View style={styles.appContainer}>
      <View style={styles.content}>
        <View style={{flex:2,alignItems:"center"}}>
          <Text style={styles.title}>
            {task}
          </Text>
          <Image 
          style={{
            borderWidth:2,
            borderColor:"black",
            borderRadius:30,
            backgroundColor:"white",
            width:300,
            height:250,
            alignSelf:"center",
            resizeMode:"contain"
          }}
          source={{
            uri: image? image.image : null,
          }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Camera",{taskProof:true, task:task, taskId:taskId})
            }
          >
            <Avatar.Icon
              icon={"camera"}
              style={{
                backgroundColor: "white",
                margin: 10,
               }}
              size={50}
              color={"black"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.comment}>
          <TextInput style={styles.input} placeholder="Enter the comment"  onChangeText={(value) => setComment(value)} />
        </View>
        <View style={styles.btn}>
          <Pressable
            onPress={handleSubmit} 
            style={styles.button}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn:{
    alignItems:"center",
  },
  comment:{
    flex:2
  },
  appContainer: {
    flex: 1,
    padding: 0,
    marginTop: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom:10,
  },
  input: {
    flex:1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    alignContent:'flex-start',
  },
  content: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 60,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ffc800",
    backgroundColor: "#ffeb9a",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "blue",
  },
  logo: {
    marginTop: 20,
    height: 200,
    width: 210,
    borderRadius: 100,
  },
  button: {
    height:52,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#ffcc00",
  },
});

export { TaskProof };
