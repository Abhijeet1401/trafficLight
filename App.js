import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Light from "./Src/Screens/Light";
import MyComponent from "./Src/Screens/MyComponent";
import TrafficLight from "./Src/Screens/TrafficLight";

export default function App() {
  return (
    <View style={styles.container}>
      <TrafficLight />
      {/* <MyComponent/> */}
      {/* <Light/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
