import {Text,View,StyleSheet,Image,TouchableOpacity,FlatList} from "react-native";
import { getData } from "../storage";
import {useEffect,useState} from "react";
import { StatusBar } from "expo-status-bar";

const SupervisorDashboard = ({ navigation }) => {
  
  const [employeeNo, setEmployeeNo] = useState(0);
  const [taskDetails, setTaskDetails] = useState([]);
  //using for run 2ng useEffect after fully complete 1st useEffect. Otherwise at initial render task details won't load
  const [firstEffectCompleted, setFirstEffectCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("employeeNo");
      if (data !== null) {
        setEmployeeNo(data);
        setFirstEffectCompleted(true); // Mark the first effect as completed
      }
    };
    fetchData();
  }, []);
  

  useEffect(() => {
    if (firstEffectCompleted) { // Only run this effect if the first effect is completed
      const taskDetail = async () => {
        try {
          const response = await fetch(
            "http://192.168.55.223:4000/api/task/getTaskOfSupervisor",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ employeeNo: employeeNo }),
            }
          );
          if (response.status === 200) {
            const jsonData = await response.json();
            setTaskDetails(jsonData);
          } 
        } catch (error) {
          console.log(error.message);
        }
      };
      taskDetail();
    }
  },
  //to execute useEffect only when employeeNo and firstEffectCompleted state variables value change
  [employeeNo, firstEffectCompleted]);

  
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
        <View style={styles.toDoContainer}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={taskDetails} 
            renderItem={({ item }) => ( 
              <TouchableOpacity onPress={()=>navigation.navigate("Task Proof",{taskId:item.id})}>
                <View style={styles.checkListContainer}>
                  <Text style={styles.task}>{item.task}</Text>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
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
