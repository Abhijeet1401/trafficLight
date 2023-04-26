import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

const API1_URL = "https://jsonplaceholder.typicode.com/posts/1";
const API2_URL = "https://jsonplaceholder.typicode.com/posts/2";
const API3_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

const fetchData = async () => {
  const responses = await Promise.all([
    fetch(API1_URL),
    fetch(API2_URL),
    fetch(API3_URL),
  ]);
  const data = await Promise.all(responses.map((response) => response.json()));
  return data;
};

const TrafficLight = () => {
  const [apiStatus, setApiStatus] = useState("red");
  const [apiData, setApiData] = useState([]);
  //console.log("hii")
  const handleFetchData = () => {
    setApiStatus("yellow");
    Promise.all([fetch(API1_URL), fetch(API2_URL), fetch(API3_URL)])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        console.log("Fetched data:", data);

        console.log("-----------------------", data[2]);
        setApiStatus("green");
        setApiData(data);
      })
      .catch(() => setApiStatus("red"));
  };

  //console.log("hii")

  const renderItem = ({ item }) => {
    return Array.isArray(item) ? (
      <TouchableOpacity
        style={{ width: 300, height: 300, alignSelf: "center" }}
      >
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >
          {item.map((item) => {
            return (
              <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.title}>{item.email}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </TouchableOpacity>
    ) : (
      <View style={styles.item}>
        <Text style={styles.title}>{item.id}</Text>
        <Text style={styles.title}>{item.userId}</Text>
        <Text style={styles.body}>{item.title}</Text>
        <Text style={styles.title}>{item.body}</Text>
      </View>
    );
  };
  return (
    <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.trafficLightContainer}>
          <View
            style={[
              styles.light,
              { backgroundColor: apiStatus === "red" ? "red" : "grey" },
            ]}
          />
          <View
            style={[
              styles.light,
              { backgroundColor: apiStatus === "yellow" ? "yellow" : "grey" },
            ]}
          />
          <View
            style={[
              styles.light,
              { backgroundColor: apiStatus === "green" ? "green" : "grey" },
            ]}
          />
          {/* // Status  showing */}

          <Text style={styles.textStatus}>
            {apiStatus === "red"
              ? "No API data fetched"
              : apiStatus === "yellow"
              ? "Fetching API data..."
              : "API data fetched successfully"}
          </Text>
        </View>

        {/* <Button title="Fetch API" onPress={handleFetchData} /> */}
        <Button title="Fetch API Data" onPress={handleFetchData} />
        {apiStatus === "green" && (
          <FlatList
            data={apiData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            nestedScrollEnabled={true}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 50,
  },
  light: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 10,
  },
  item: {
    backgroundColor: "#ddd",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  trafficLightContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  textStatus: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TrafficLight;
