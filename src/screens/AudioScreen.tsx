import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function AudioScreen() {
  return (
    <View style={styles.workSpace}>
      <Text>Hello ItemScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  workSpace: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AudioScreen;
