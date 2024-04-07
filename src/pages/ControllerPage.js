import React, {useState} from 'react';
import { BottomNavigation } from 'react-native-paper';

import ChecklistMain from './checklistMenu';
import LoginPage from './loginPage'
import ChecklistPage from './checklistPage'
import HomePage from './homePage'

const Controller = () => {
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'homepage', title: 'Inicio', icon: ''},
    {key: 'login', title: 'Login', icon: 'account'},
    {key: 'checklistMenu', title: 'Menu', icon: 'profile'},
    {key: 'checklist', title: 'Checklist', icon: ''},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    checklistMenu: ChecklistMain,
    login: LoginPage,
    checklist: ChecklistPage,
    homepage: HomePage,
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