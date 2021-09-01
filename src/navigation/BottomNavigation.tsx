import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ModalScreen from "../screens/ModalScreen";
import AudioScreen from "../screens/AudioScreen";
import ItemScreen from "../screens/ItemScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Item Screen"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Item Screen"
        component={ItemScreen}
        options={{
          tabBarLabel: "Item",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Modal Screen"
        component={ModalScreen}
        options={{
          tabBarLabel: "Modal",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Audio Screen"
        component={AudioScreen}
        options={{
          tabBarLabel: "Audio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="audio-video"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
