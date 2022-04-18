/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RecipesScreen from "../screens/RecipesScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NestedTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Search"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Favourite"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

function Navigators(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          name="NestedTabs"
          component={NestedTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Recipes"
          component={RecipesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Navigators;
