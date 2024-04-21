import React, {useState} from 'react';
import { BottomNavigation } from 'react-native-paper';

import ChecklistMain from './checklistMenu';
import LoginPage from './loginPage'
import HomePage from './homePage'
import RegisterPage from './registerPage'

const Controller = () => {
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'homepage', title: 'Inicio', icon: 'home'},
    {key: 'login', title: 'Login', icon: 'account'},
    {key: 'register', title: 'Register', icon: 'account-plus'},
    {key: 'checklistMenu', title: 'Menu', icon: 'folder'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    checklistMenu: ChecklistMain,
    login: LoginPage,
    homepage: HomePage,
    register: RegisterPage,
  })
 
  return(
    <BottomNavigation 
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )


};


export default Controller;