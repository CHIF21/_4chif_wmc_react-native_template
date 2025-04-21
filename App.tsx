import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

function HomeScreen({navigation}: {navigation: any}) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')} >
            <Text>Home Screen</Text>
        </TouchableOpacity>
      </View>
  );
}

function SettingsScreen({navigation}: {navigation: any}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')} >
                <Text>Settings Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
        >
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
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
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={StackNavigator} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}