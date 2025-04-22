import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import AddScreen from "./screens/AddScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator
              initialRouteName="Home"
          >
              <Tab.Screen name="Home" component={StackNavigator} />
              <Tab.Screen name="Add" component={AddScreen} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}