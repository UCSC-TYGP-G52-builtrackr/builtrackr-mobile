import { ScrollView, Text, Image,StyleSheet ,Pressable,View, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';



const Home = () => {
  return (
    
    <ScrollView style  = {styles.container}>
  
    

     <Image source={require('../assets/home.png')} style  = {styles.image} />
     <Text style={styles.text}>Welcome to <Text style  ={{fontWeight:'800'}}>BuilTrackr</Text></Text>       
     <Text style={styles.slogan}>We are here to help </Text>
     <Text style= {styles.slogans}> with your construction sites</Text>
     <TouchableOpacity style  = {styles.button}><Text>Explore</Text></TouchableOpacity>
     <Text style={styles.texts}>Our Services</Text>
     <Image source={require('../assets/Construction_w.png')} style  = {styles.images} />
     <View style= {{alignItems:"center", padding:10}}>
     <Text style  ={{ fontWeight:'bold' ,fontSize: 18}}>Allocate Manpower</Text>
     </View>
     <View style  = {styles.content}>
     <Text style  ={{marginLeft: 60, fontSize: 16}}>Assign People to each Construction Site and Monitor them.</Text>
     </View>
     <View >
      <Image source={require('../assets/Add_tasks.png')} style  = {styles.images} />
      <View style= {{alignItems:"center", padding:10}}>
     <Text style  ={{ fontWeight:'bold' ,fontSize: 18}}>Task Scheduling </Text>
     </View>
     <View style  = {styles.content}>
     <Text style  ={{marginLeft: 60, fontSize: 16}}>Can easily create and update task schedules, assign resources and responsibilities,
      track progress and performance</Text>
     </View>
     </View>
     <View >
      <Image source={require('../assets/Add_Data.png')} style  = {styles.images} />
      <View style= {{alignItems:"center", padding:10}}>
     <Text style  ={{ fontWeight:'bold' ,fontSize: 18}}>Progress and Analytics 
Reports </Text>
     </View>
     <View style  = {styles.content}>
     <Text style  ={{marginLeft: 60, fontSize: 16}}>Helps to monitor the performance, 
     quality and efficiency of your projects with analytical reports.</Text>
     </View>
     </View>
     <View >
      <Image source={require('../assets/Checking.png')} style  = {styles.images} />
      <View style= {{alignItems:"center", padding:10}}>
     <Text style  ={{ fontWeight:'bold' ,fontSize: 18}}>Inventory Management</Text>
     </View>
     <View style  = {styles.content}>
     <Text style  ={{marginLeft: 60, fontSize: 16, paddingBottom:40}}>Can easily access and monitor your inventory levels, 
     place orders, receive alerts and generate reports.</Text>
     </View>
     </View>
     <View  style  = {styles.footer}>
      
      <View style ={styles.container} >
<View style ={styles.row}>
  <View>
  <Text style ={{color:'white', width:220}}>
    Contact Us
  </Text>
  <View style={{marginTop:15, marginLeft:-5}}>
<Text style={{color:'white'}}>  <Icon name="phone" size={20} color="white" />  0112312451</Text>
<Text style={{color:'white',marginTop:10}}>  <Icon name="facebook" size={20} color="white" />  builtrackr</Text>
<Text style={{color:'white',marginTop:10}}>  <Icon name="envelope" size={20} color="white" />  builtrackr@gmail.com</Text>
  </View>
  </View>
  <View>
  <Text style ={{color:'white', width:100}}>
    About Us
    <View>
      <Text style ={{color:'white',marginTop:15}}>
      Services
      </Text>
      <Text style ={{color:'white',marginTop:10}}>
      Benefits
      </Text>
      </View>
  </Text>
  </View>


  </View>
       
      </View>
     </View >
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    width: 350,
    padding: 10,
  },

  row:{
    marginTop: 20,
    marginLeft: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  image:{
  marginTop: 100,
  width: 400,
  height: 400,
},
images:{
  marginLeft: 100,
  width: 200,
  height: 200,
},
texts:{
  fontSize: 16, 
  textAlign: 'center',
fontWeight:'bold',
  marginTop:60,
},
slogan:{
  fontSize: 18, 
  textAlign: 'center',
  paddingBottom: 30,
  marginTop: -15,
},
slogans:{
  fontSize: 18, 
  textAlign: 'center',
  paddingBottom: 80,
  marginTop: -30,
},
text:{
  fontSize: 30, 
  textAlign: 'center',
  marginTop: 20,
  paddingBottom: 40,
  fontWeight:'bold',

},

button:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      borderRadius: 15,
      backgroundColor: '#ffcc00',
      width: 200,
      marginLeft: 95,
},

footer:{
  height: 200,
  backgroundColor: '#101522',
  color: '#ffffff',
},

})
export default Home;