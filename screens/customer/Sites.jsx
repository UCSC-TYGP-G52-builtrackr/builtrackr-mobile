import { Text, View, StyleSheet, TextInput, Image, ImageBackground, Pressable, onPress, Button, ScrollView, TouchableOpacity, } from "react-native";
import { useNavigation } from '@react-navigation/native';
  
import React from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from "react";
  
const Sites = ({ navigation }) => {
  const route = useRoute();
  const customerID = route.params.customerID;
  const [customerSites, setCustomerSites] = useState([]);

  const handleNavigation = (id) => {
    // Use navigation to navigate to another screen
    navigation.navigate('MySite', { siteID: id }); // Replace 'YourScreenName' with the name of your target screen
  };

  useEffect(() => {
    const fetchCustomerSites = async () => {
      try {
        console.log("customer's id", customerID);
        const response = await fetch(
          `${baseUrl}/api/site/getCustomerSites`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ customerID }), // Sending ID in the request body
          }
        );
        if (response.status === 200) {
          const jsonData = await response.json();
          console.log("Data received:", jsonData);
          // console.log(jsonData);
          setCustomerSites(jsonData);
        } else {
          // console.log(response.status);
          console.log("Error fetching data. Status:", response.status);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchCustomerSites();
  }, [customerID]);

  return (
    <ScrollView>
    <View style={styles.appContainer}>
      <View style={styles.profile}>
        <Text style={styles.heading}>My Sites</Text>
        {/* <View style={{alignItems: 'center'}}>
          <Image style={styles.sitePic} source={require('../../assets/havelock.jpg')} />
        </View> */}
        <View style={{alignItems: 'center'}}>
        {customerSites.map((customerSite) => (
          <View key={customerSite.site_id} style={{ position: 'relative', height: 300, width: 300, marginBottom: 20 }}>
            <ImageBackground
              source={require('../../assets/havelock.jpg')} // Use the actual image source
              style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)', // Use the desired opacity
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 24, color: 'white', textAlign: 'center' }}>
                  {customerSite.site_name}
                </Text>
                <TouchableOpacity
                  onPress={() => handleNavigation(customerSite.site_id)} // Handle navigation here
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    borderColor: 'white',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ marginLeft: 10, color: 'white' }}>More Info</Text>
                  {/* Add your icon here */}
                  <AntDesign name="doubleright" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </ImageBackground>
        </View>
        ))}
        </View>
      </View>
    </View>
    </ScrollView>
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
    padding: 20,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
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

export { Sites };
  