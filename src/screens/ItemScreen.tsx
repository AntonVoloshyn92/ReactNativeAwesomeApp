import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Articles } from "../interfaces/NewsInterface";
import axios, { AxiosResponse } from "axios";

const Item = ({ title }: { title: any }) => (
  <TouchableOpacity onPress={() => Alert.alert(title)}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

function ItemScreen() {
  const [newsDate, setNewsDate] = useState<Articles[]>([]);
  useEffect(() => {
    axios
      .get<Articles>(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca9dbb585bf54ea6a04a51bc7b48b2df"
      )
      .then((response: AxiosResponse) => {
        setNewsDate(response.data);
      });
  }, []);

  // console.log("NewsDate: ", newsDate);
  // console.log("NewsLegth: ", newsDate.length);

  // const renderItem = ({ item }: { item: any }) => <Item title={item.title} />;

  return (
    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={newsDate}
    //     renderItem={renderItem}
    //     keyExtractor={(item) => item.source.id}
    //   />
    // </SafeAreaView>
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello my</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#c8ccc9",
    elevation: 5,
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ItemScreen;
