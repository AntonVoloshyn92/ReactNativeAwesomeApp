import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Anton Voloshyn",
    sex: "men",
    age: "29",
  },
  {
    id: "2",
    title: "Dasha Voloshyn",
    sex: "women",
    age: "17",
  },
  {
    id: "3",
    title: "Sofia Voloshyn",
    sex: "women",
    age: "17",
  },

  {
    id: "4",
    title: "Lena Voloshyn",
    sex: "women",
    age: "43",
  },

  {
    id: "5",
    title: "Marina Voloshyn",
    sex: "women",
    age: "26",
  },

  {
    id: "6",
    title: "Natasha Voloshyn",
    sex: "women",
    age: "34",
  },

  {
    id: "7",
    title: "Sasha Voloshyn",
    sex: "men",
    age: "53",
  },

  {
    id: "8",
    title: "Tessa Voloshyn",
    sex: "women",
    age: "2",
  },
  {
    id: "9",
    title: "Nensi Voloshyn",
    sex: "women",
    age: "8",
  },
];

const Item = ({ title }: { title: any }) => (
  <TouchableOpacity onPress={() => Alert.alert(title)}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

function ItemScreen() {
  const renderItem = ({ item }: { item: any }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
