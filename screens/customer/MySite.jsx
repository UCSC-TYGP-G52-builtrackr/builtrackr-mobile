import { Text, View, StyleSheet, TextInput, Image, ImageBackground, Pressable, onPress, Button, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator'
import React from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from "react";
  
const MySite = ({ navigation }) => {
  const route = useRoute();
  const id = route.params.siteID;
  const [oneSite, setOneSite] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const response = await fetch(
          "http://192.168.8.100:4000/api/site/getSingleSite",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }), // Sending ID in the request body
          }
        );
        if (response.status === 200) {
          const jsonData = await response.json();
          console.log("One site Data received:", jsonData);
          // console.log(jsonData);
          setOneSite(jsonData);
          // console.log(oneSite);
          setLoading(false);
        } else {
          // console.log(response.status);
          console.log("Error fetching data. Status:", response.status);
          setError("Error fetching data");
          setLoading(false);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchSiteData();
  }, [id]);

  if (loading) {
    // Display a loading indicator
    return (
      <View style={styles.appContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    // Display an error message
    return (
      <View style={styles.appContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.profile}>
        <Text style={styles.heading}>{oneSite[0].site_name}</Text>
        <Text style={styles.headingType}>{oneSite[0].site_type}</Text>
        <View style={styles.progress}>
        <Text style={{marginBottom: 20}}>Progress</Text>
          <CircularProgress
            radius={90}
            value={80}
            progressValueColor={'black'}
            fontSize={20}
            activeStrokeColor="#ffc800"
            inActiveStrokeColor="#f7d557"
            inActiveStrokeOpacity={0.3}
            valueSuffix="%"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sitePic: {
    width: 300,
    height: 300,
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
    paddingTop: 20,
    paddingLeft: 20,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'left',
  },
  headingType: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingTop: 5,
    marginLeft: 10,
    fontSize: 12,
    textAlign: 'left',
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
    // alignItems: "center",
    // backgroundColor: "red",
    borderBottomWidth: 2,
    borderBottomColor: "#ffc800",
  },

  progress: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
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

export { MySite };
  