import { StyleSheet, Text, View, Button, TextInput} from "react-native";

export default function App() {
  return (
    <View style={styles.appCointainer}>
      <View style={styles.goalContainer}>
        <Text style={styles.heading}>Log in to</Text>
        <Text>BuiltTrackr</Text>
      </View>
      <View style={styles.flexView}>
        <TextInput style={styles.textInput} placeholder="Enter your Email or Username"/> 
        <TextInput style={styles.textInput} placeholder="Enter your goal!"/> 
        <Button title="Login"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  appCointainer:{
    flex:1, //now take whole available screen size
    paddingTop:50,
    paddingHorizontal:16,
  },
  flexView:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'center',
    // paddingBottom: 24,
    // borderBottomWidth: 2,
    // borderBottomColor: '#198a35',
  },
  textInput:{
    borderWidth: 1,
    borderColor:'red',
    width:'70%',
    marginRight:17 ,
    padding: 8,
  },
  goalContainer:{
    flex:4
  },
  heading:{
    fontWeight: 'bold',

  }

  
});
