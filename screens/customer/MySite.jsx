import { Text, View, StyleSheet, TextInput, Image, ImageBackground, Pressable, onPress, Button, ScrollView, Modal, TouchableOpacity, ActivityIndicator, SafeAreaView, Picker } from "react-native";
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
  const [siteImage, setSiteImage] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [shouldShow, setShouldShow] = useState(true);
  const [comment, setComment] = useState('');

  const imglocal = require("../../assets/tools/drill.jpg");

  const handleSubmit = () => {
    // You can handle form submission here, e.g., send data to an API or perform some action
    console.log('Comment:', comment);
  };

  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/site/getSingleSite`,
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

  useEffect(() => {
    const fetchSiteImgPath = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/site/getSiteImage`,
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
          console.log("Site Image Data received:", jsonData);
          // console.log(jsonData);
          setSiteImage(jsonData);
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
    fetchSiteImgPath();
  }, [id]);


  if (loading) {
    // Display a loading indicator
    return (
      <View style={styles.appContainerLoadig}>
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
  // console.log(siteImage.filter((e) => e.taskId === selectedItem)[0].taskId);

  return (
    <ScrollView>
    <View style={styles.appContainer}>
      <View style={styles.profile}>
        <Text style={styles.heading}>{oneSite[0]?.site_name}</Text>
        <Text style={styles.headingType}>{oneSite[0]?.site_type}</Text>
        <View style={styles.progress}>
        <Text style={{marginBottom: 20}}>Overall Site Progress</Text>
          <CircularProgress
            radius={90}
            value={10}
            progressValueColor={'black'}
            fontSize={20}
            activeStrokeColor="#ffc800"
            inActiveStrokeColor="#f7d557"
            inActiveStrokeOpacity={0.3}
            valueSuffix="%"/>
            <View style={{ marginBottom: 20 }}>
            <Text style={styles.subheading}>Work In Progress</Text>
              {siteImage
                .filter((imgT) => imgT.image !== null)
                .map((imgT) => (
                  <View key={imgT.taskId} style={{alignItems: "center"}}>
                    <View style={{width: 300, flexDirection: 'row', gap: 5}}>
                      <View style={{flex:1}}>
                      <Text style={{justifyContent: 'flex-start', fontSize: 15, paddingTop: 10}}>{imgT.title}</Text>
                      </View>

                    {/* <SafeAreaView style={{flex:1}}>
                      <View style={{flex:1}}>
                      <TouchableOpacity
                        onPress={() => {
                          setShouldShow(!shouldShow);
                        }} // Handle navigation here
                        style={{
                          justifyContent: 'flex-end',
                          // flexDirection: 'row',
                          // marginLeft: 30,
                          // marginRight: 150,
                          alignItems: 'center',
                          // marginTop: 10,
                          // backgroundColor: "red",
                          borderColor: '#ffc800',
                          borderWidth: 1,
                          padding: 10,
                          borderRadius: 5,
                        }}
                      >
                        <Text>Add Comment</Text>
                        {/* Add your icon here */}
                      {/* </TouchableOpacity>
                      {shouldShow ? (
                          <Image
                            source={{
                              uri:
                                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                            }}
                            style={{ width: 250, height: 250 }}
                          />
                        ) : null}
                      </View> */}
                      {/* </SafeAreaView> */}
                      </View>
                    <Image source={{ uri: `http://192.168.43.122:4000/Supervisor/uploads/${imgT.image}` }} style={{height: 300, width: 300, marginTop: 10, marginBottom: 10}}/>
                  </View>
                ))}
            </View>
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
  appContainerLoadig: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
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
    color: "#6b6464"
  },
  subheading: {
    paddingTop: 20,
    paddingBottom: 20,
    // paddingLeft: 20,
    // marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'left',
  },

  taskheading: {
    paddingTop: 20,
    paddingLeft: 20,
    marginLeft: 10,
    fontSize: 15,
    textAlign: 'left',
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
    // borderBottomWidth: 2,
    // borderBottomColor: "#ffc800",
  },

  centeredItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredItem: {
    marginVertical: 10, // Add your desired spacing
  },
  centeredText: {
    textAlign: 'center',
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: "red",
    textAlign: 'center',
  },
});

export { MySite };
  