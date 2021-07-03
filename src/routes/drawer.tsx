import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import DrawerContent from '../components/DrawerContent';

export type RootDrawerParamList = {
  Home: undefined;
};

const {Screen, Navigator} = createDrawerNavigator<RootDrawerParamList>();

const Drawer: React.FC = () => {
  return(
    <Navigator 
      drawerContent={props => <DrawerContent {...props}/>}
    >
      <Screen name="Home" component={Home}/>
    </Navigator>
  )
}

export default Drawer;


