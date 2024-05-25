import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ChecklistsScreen from '../screens/ChecklistsScreen';
import ChecklistScreen from '../screens/ChecklistScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Checklists" component={ChecklistsScreen} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
