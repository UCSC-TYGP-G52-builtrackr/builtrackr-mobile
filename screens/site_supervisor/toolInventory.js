import {Text,View,StyleSheet,Image,ScrollView,TouchableOpacity,
} from "react-native";
import React from "react";
import Card from "../../components/card";

const ToolInventory = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      <Card style={{flexDirection:'Row',justifyContent:'center'}}>
        <Text>Testing</Text>
        <Image source={require('../../assets/tools/drill.jpg')} style={styles.image}/>
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

  image: {
    width:100,
    height:100,
    borderRadius: 10,
  }
  
});

export { ToolInventory };
