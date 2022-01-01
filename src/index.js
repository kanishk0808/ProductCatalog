import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Pages

import Login from './screens/Login';
import Products from './screens/Products';
import Cart from './screens/Cart';

// Tab

import TabBar from './components/TabComponent'

// Drawer

import CustomDrawer from './components/DrawerComponent'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export const Root = () => {

  const DrawerNavigator = () => (
    <Drawer.Navigator drawerStyle={{ width: '85%' }} drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Products" component={Products} />
      {/* <Drawer.Screen name="Cart" component={Cart} /> */}
    </Drawer.Navigator>
  );

  const TabsNavigator = () => (
    <Tabs.Navigator tabBar={(props) => <TabBar {...props} />} initialRouteName={'Products'} >
      <Tabs.Screen name="Products" component={DrawerNavigator} />
      <Tabs.Screen name="Cart" component={Cart} />
    </Tabs.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode='none'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};