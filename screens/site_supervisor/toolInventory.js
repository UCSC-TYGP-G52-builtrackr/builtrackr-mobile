import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getData } from "../storage";
import { useEffect, useState } from "react";
import Card from "../../components/toolCard";

const ToolInventory = ({ navigation }) => {
  const [employeeNo, setEmployeeNo] = useState(0);
  const [employeeName, setEmployeeName] = useState("");
  const [taskDetails, setTaskDetails] = useState([]);
  //using for run 2ng useEffect after fully complete 1st useEffect. Otherwise at initial render task details won't load
  const [firstEffectCompleted, setFirstEffectCompleted] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("employeeNo");
      const data1 = await getData("employeeName");
      if (data !== null) {
        setEmployeeNo(data);
        setEmployeeName(data1);
        setFirstEffectCompleted(true); // Mark the first effect as completed
      }
    };
    fetchData();
  }, []);

  useEffect(
    () => {
      if (firstEffectCompleted) {
        // Only run this effect if the first effect is completed
        const taskDetail = async () => {
          try {
            const response = await fetch(
              `${baseUrl}/api/task/getTaskOfSupervisor`,
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
              console.log("taskDetails", jsonData);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
        taskDetail();
      }
    },
    //to execute useEffect only when employeeNo and firstEffectCompleted state variables value change
    [employeeNo, firstEffectCompleted]
  );

  const toolData = [
    {
      id: "1",
      title: "Hand Drill",
      image: require("../../assets/tools/drill.jpg"),
      Count: 5,
    },
    {
      id: "2",
      title: "Grinder",
      image: require("../../assets/tools/grinder.jpg"),
      Count: 8,
    },
    {
      id: "3",
      title: "Excavator",
      image: require("../../assets/tools/Excavator.jpg"),
      Count: 1,
    },
    {
      id: "4",
      title: "Concrete mixer",
      image: require("../../assets/tools/concreteMixer.jpg"),
      Count: 4,
    },

    {
      id: "6",
      title: "Ladders",
      image: require("../../assets/tools/ladders.jpg"),
      Count: 6,
    },
    {
      id: "7",
      title: "Air Compressor",
      image: require("../../assets/tools/airCompressor.webp"),
      Count: 7,
    },
    {
      id: "8",
      title: "Drill",
      image: require("../../assets/tools/drill.jpg"),
      Count: 8,
    },
    {
      id: "5",
      title: "Welding Plant",
      image: require("../../assets/tools/welding plant.jpg"),
      Count: 5,
    },
    // Add more tool data as needed
  ];
  return (
    <View style={styles.appContainer}>
      <FlatList
        data={toolData}
        numColumns={2} // Display in 2 columns
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.header}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.count}>Count: {item.Count}</Text>
          </Card>
        )}
      />
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
    width: 100,
    height: 100,
    borderRadius: 10,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  count: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
  },
});

export { ToolInventory };
