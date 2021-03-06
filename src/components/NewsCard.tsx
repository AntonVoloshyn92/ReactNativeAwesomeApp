import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const NewsCard = ({}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.autor}>Autor</Text>
      <Image style={styles.image} />
      <Text style={styles.description}>Description</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  title: {
    width: width,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    // width: width,
    marginHorizontal: width * 0.02,
    marginVertical: width * 0.05,
    color: "gray",
    fontSize: 18,
  },
  image: {
    width: width,
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  autor: {
    marginBottom: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
});

export default NewsCard;
