import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  onPress,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import React from "react";
import { StatusBar } from "expo-status-bar";

const SupervisorDashboard = ({ navigation }) => {

  return (
    <View style={styles.appContainer}>
      <View style={styles.profile}>
        <Image
          style={styles.logo}
          source={require("../../assets/supervisor-profile.png")}
        />
        <Text style={styles.heading}>Welcome back Supervisor Rumindu</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subheading}>Works to do</Text>
        <ScrollView>
        <View style={styles.toDoContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Task Proof")}>
          <View style={styles.checkListContainer}>
            <Text style={styles.task}>
              Task 1
            </Text>
            <View style={styles.circle}>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.checkListContainer}>
          <Text style={styles.task}>
            Task 2
          </Text>
          <View style={styles.circle}>
          </View>
        </View>
        <View style={styles.checkListContainer}>
          <Text style={styles.task}>
            Task 2
          </Text>
          <View style={styles.circle}>
          </View>
        </View>
          
          
          <View style={styles.checkListContainer}>
            <Text style={styles.task}>
              Task 2
            </Text>
            <View style={styles.circle}>
            </View>
          </View>
          


          <View style={styles.checkListContainer}>
            <Text style={styles.task}>
              Task 2
            </Text>
            <View style={styles.circle}>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
      

      
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

export { SupervisorDashboard };
