import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Homepage from '../screens/Homepage';

import { createStackNavigator } from '@react-navigation/stack';
import Panchanng from '../screens/Panchanng';
import Kalyanak from '../screens/Kalyanak';
import Bemember from '../screens/Bemember';
import AJSevents from '../screens/AJSevents';
import Login from '../screens/Login';
import Donate from '../screens/Donate';
import Pachkhaan from '../screens/Pachkhaan';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();
export default function Mydrawer(){
    return(<Drawer.Navigator  screenOptions={{
      headerStyle: {
       backgroundColor:"#DB4242" // Specify the height of your custom header
      }
    }} >
        <Drawer.Screen name="Home" component={Homepage} />
        
        <Drawer.Screen name="Panchanng" component={Panchanng} />
        <Drawer.Screen name="Kalyanak" component={Kalyanak} />
        <Drawer.Screen name="AJS Events" component={AJSevents} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Become a Members" component={Bemember} />
        <Drawer.Screen name="Donate" component={Donate} />
        <Drawer.Screen name="Pachkhaan" component={Pachkhaan} />
        <Drawer.Screen name="Contact" component={Contact} />
        
        
      </Drawer.Navigator>);
    
}