import { View, Text, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from "react";
import {Camera,CameraType} from "expo-camera";
import { Avatar } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker'


const CameraComponent = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
{/*/Getting images from galary*/}
  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return alert("Permission to access gallery is required");

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      aspect:[1,1],
      quality: 1
    });
    console.log(data)
  
    if (route.params?.taskProof)
      return navigation.navigate("Task Proof", {
        image: data.assets[0].uri,
    }); 

  };

  const clickPicture=()=>{};
  return (
    <View style={{
      flex:1,
    }}
    >
      <Camera
        type={type}
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}
      />

      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position: "absolute",
        }}
      >
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickPicture} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
      
    </View>
  )
}
const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      icon={icon}
      size={40}
      color={'white'}
      style={{
        backgroundColor: '#ffcc00',
      }}
    />
  </TouchableOpacity>
);

export {CameraComponent }