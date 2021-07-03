import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from '../screens/Home';
import { NewTask } from '../screens/newTask';
import { Description } from '../screens/Description';
import Drawer from './drawer';

const {Screen, Navigator} = createStackNavigator();

const Routes: React.FC = () => (
 
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Drawer}/>
        <Screen name="NewTask" component={NewTask}/>
        <Screen name="Description" component={Description}/>
      </Navigator>
    </NavigationContainer>

) 

export default Routes;