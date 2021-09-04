import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/Home/Home';
import Details from 'screens/Details/Details';
import Setting from 'screens/Setting/Setting';
import CustomizeTab from './conponents/CustomizeTab';
import Screens from './Screens';
import Login from 'screens/Login/Login';
import Animated from 'screens/Animated';
import SortList from 'screens/Animated/SortList';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomizeTab {...props} />}
      screenOptions={{header: () => null}}>
      <Tabs.Screen name={Screens.Home} component={Home} />
      <Tabs.Screen name={Screens.Details} component={Details} />
      <Tabs.Screen name={Screens.Setting} component={Setting} />
    </Tabs.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'MainTab'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'MainTab'} component={MainTab} />
        <Stack.Screen name={Screens.Login} component={Login} />
        <Stack.Screen name={'Animated'} component={Animated} />
        <Stack.Screen name={'SortList'} component={SortList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
