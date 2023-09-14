import {Text,View,StyleSheet,TextInput,Image, Pressable,onPress,Button,ScrollView,TouchableOpacity,
} from "react-native";
import React from "react";
import Card from "../../components/card";
import { StatusBar } from "expo-status-bar";

const ToolInventory = ({ navigation }) => {

  return (
    <View style={styles.appContainer}>
      <Card>
        <Text>Testing</Text>
      </Card>
      <Card>
        <Text>Testing</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
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
  subheading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 5,
  },
  checkListContainer: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
  },
  profile: {
    flex: 1.5,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ffc800",
  },

  toDoContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight:20,
    marginBottom:20,
    marginTop:5,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ffc800",
    backgroundColor: "#ffeb9a",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "blue",
  },
  checkListContainer:{
    flexDirection:'row',
    justifyContent: "space-between",
    padding:5,
    fontSize: 20,
  },

  circle:{
    height:20,
    width:20,
    borderRadius:100,
    borderWidth:2,
    borderColor: "black",
    backgroundColor: "white"
  },
  task:{
    fontSize: 18,
  },
  content: {
    padding: 5,
    flex: 2.2,
  },
  logo: {
    marginTop: 20,
    height: 200,
    width: 210,
    borderRadius: 100,
  }
});

export { ToolInventory };
