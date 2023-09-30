import {Text,View,StyleSheet,TextInput,Image,Pressable,TouchableOpacity,ScrollView} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar,Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const TaskProof = ({ navigation, route }) => {
  
  const [image, setImage]=useState(null);
  const[taskId,setTaskId]=useState(route.params.taskId);
  const[imageName,setImageName]=useState('')
  console.log(taskId)

    const handleSubmit=async()=>{
      console.log('subniteke')
      const formData = new FormData();
        formData.append('image', {uri:image.image});
      try {
        const response = await fetch(
          "http://192.168.55.223:4000/api/upload/task",
          {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: formData,
          }
        );
        if (response.status === 200) {
          const jsonData = await response.json();
          setImageName(jsonData.data);
          console.log(jsonData.data)
          
        }
      } catch (error) {
        console.log(error.message);
        console.log('catch block');
      }
      // navigation.navigate("Supervisor Dashboard")
    }
  
  useEffect(() => {
    if (route.params) setImage(route.params);
  }, [route.params]);



  return (
    <ScrollView>
    <View style={styles.appContainer}>
      <View style={styles.content}>
        <View style={{flex:2,alignItems:"center"}}>
          <Text style={styles.title}>
            Task 1
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
              navigation.navigate("Camera",{taskProof:true})
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
          <TextInput style={styles.input} placeholder="Enter the comment" />
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
