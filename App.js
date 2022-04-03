import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import _ from 'lodash';

import BrowseScreen from './src/screens/BrowseScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import AddScreen from './src/screens/AddScreen';
import MessageDetailsScreen from './src/screens/MessageDetailsScreen';
import EditScreen from './src/screens/EditScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

function Home() {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Message Details" component={MessageDetailsScreen} />
      <Stack.Screen name="Edit Screen" component={EditScreen} />
    </Stack.Navigator>
  );
}

function Browse() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Browse" component={BrowseScreen} />
      <Stack.Screen name="Edit Screen" component={EditScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#222130',
          inactiveBackgroundColor: '#222831',
        }}
      >
        <Tab.Screen name="Messages" component={Home} />
        <Tab.Screen name="Browse" component={Browse} />
        <Tab.Screen name="Add" component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

