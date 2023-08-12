import {Text,View,StyleSheet,TextInput,Image,Pressable,TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar,Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const TaskProof = ({ navigation, route }) => {
  const [image, setImage]=useState("");
  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);


  return (
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
            backgroundColor:"#ffcc00",
            width:300,
            height:250,
            alignSelf:"center",
            resizeMode:"contain"
          }}
          source={{
            uri: image ? image : null,
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
          <Pressable style={styles.button}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
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
    borderRadius:30,
    alignContent:'flex-start',
  },
  content: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 5,
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
