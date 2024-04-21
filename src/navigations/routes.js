import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChecklistMenu from '../pages/checklistMenu';
import ChecklistPage from '../pages/checklistPage';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import Controller from '../pages/ControllerPage';
import AddChecklist from '../pages/addCheckList';
import AddItemList from '../pages/addItemList';

const Stack = createNativeStackNavigator();

const Routes = () => {

  return (
      <Stack.Navigator initalRouteName="Controller">
        <Stack.Screen name="Controller" component={Controller} options={{header:() => null}} />
        <Stack.Screen name="Home" component={HomePage} options={{header:() => null}} />
        <Stack.Screen name="CheckList Menu" component={ChecklistMenu} options={{header:() => null}} />
        <Stack.Screen name="Checklist" component={ChecklistPage} options={{header:() => null}} />
        <Stack.Screen name="Login" component={LoginPage} options={{header:() => null}} />
        <Stack.Screen name="Registro" component={RegisterPage} options={{header:() => null}} />
        <Stack.Screen name="Adicionar Checklist" component={AddChecklist} options={{header:() => null}} />
        <Stack.Screen name="Adicionar Item" component={AddItemList} options={{header:() => null}} />
      </Stack.Navigator>
  );

}

export default Routes;