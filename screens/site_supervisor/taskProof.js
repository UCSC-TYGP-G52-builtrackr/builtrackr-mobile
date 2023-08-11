import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  onPress,
  Button,
} from "react-native";

import React from "react";
import { StatusBar } from "expo-status-bar";

const TaskProof = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  
  return (
    <View style={styles.appContainer}>
      <View>
        <Text>Back to navigation</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.proof}>
          <Text style={styles.title}>
            Task 1
          </Text>
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

  proof:{
    flex:2,
    alignItems:"center",
  },
  appContainer: {
    flex: 1,
    padding: 0,
    marginTop: 0,
  },
  texts: {
    padding: 15,
  },
  heading: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profile: {
    flex: 1.5,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ffc800",
  },

  checkListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    fontSize: 20,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  },
  input: {
    flex:1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
