
import React from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import {name as appName} from './app.json';

import HomePage from './src/screen/HomePage';
import Convert from './src/screen/Convert';
import Alarm from './src/screen/Alarm';
import Portfolio from './src/screen/Portfolio';
import Profile from './src/screen/Profile';
import DovizDetail from './src/screen/DovizDetail';
import Signal from './src/screen/Signal';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import AuthMain from './src/screen/AuthMain';
import DrawerMenu from './src/components/DrawerMenu';
import Notification from './src/screen/Notification';
import News from './src/screen/News';
import KZCalculator from './src/screen/KZCalculator';
import History from './src/screen/History';
import Contact from './src/screen/Contact';
import Settings from './src/screen/Settings';


import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const lightTheme = {
  dark: false,
  colors: {
    bgColor: '#f2f2f2',
    bgColor2: '#f2f2f2',
    headerBg: '#005b96',
    activeColor: '#fff',
    inactiveColor: '#ccc',
    dovizCardColor: '#f2f2f2',
    blueTextColor: '#005b96',
    dovizCardColor: '#fff',
    menuColor: '#f2f2f2',
    bottomColor: '#fff',
    bottomText: '#7a869a',
    bottomTextActive: '#005b96',
    inputTextColor: '#000',
    chartColor: '#005b96',
  }
}

const darkTheme = {
  dark: true,
  colors: {
    bgColor: '#334756',
    bgColor2: '#2C394B',
    headerBg: '#2C394B',
    activeColor: '#f2f2f2',
    inactiveColor: '#7a869a',
    dovizCardColor: '#261C2C',
    blueTextColor: '#f2f2f2',
    dovizCardColor: '#2C394B',
    menuColor: '#f2f2f2',
    bottomColor: '#2C394B',
    bottomText: '#7a869a',
    bottomTextActive: '#f2f2f2',
    inputTextColor: '#fff',
    chartColor: '#2C394B',
  }
}

function Stackler(){
    const scheme = useColorScheme();
    return(
        <NavigationContainer theme={scheme === "dark" ? darkTheme : lightTheme}>
            <Stack.Navigator
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            >
                <Stack.Screen options={{ headerShown: false }} name="AuthMain" component={AuthMain} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="HomeTab" component={DrawerFunc} />
                <Stack.Screen options={{ headerShown: false }} name="DovizDetail" component={DovizDetail} />
                <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
                <Stack.Screen options={{ headerShown: false }} name="News" component={News} />
                <Stack.Screen options={{ headerShown: false }} name="KZCalculator" component={KZCalculator} />
                <Stack.Screen options={{ headerShown: false }} name="History" component={History} />
                <Stack.Screen options={{ headerShown: false }} name="Contact" component={Contact} />
                <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


function Tablar(){
  const {colors} = useTheme();
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              let size = 20;
              if (route.name === 'HomePage') {
                iconName = 'bar-chart-outline'
              } else if (route.name === 'Signal') {
                iconName = 'radio-outline'
              } else if (route.name === 'Alarm') {
                iconName = 'alarm-outline'
              } else if (route.name === 'Portfolio') {
                iconName = 'briefcase-outline'
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
                activeTintColor: colors.bottomTextActive,
                inactiveTintColor: colors.bottomText,
                style: {
                    backgroundColor: colors.bottomColor,
                },
                labelStyle:{
                    fontFamily: "Roboto-Medium",
                    fontSize: 12,
                    fontWeight: "400",
                    fontStyle: "normal",
                    letterSpacing: 0,
                    textAlign: "center",
                }
            }}>
                <Tab.Screen options={{ headerShown: false, title: 'Fiyatlar' }} name="HomePage" component={HomePage} />
                <Tab.Screen options={{ headerShown: false , title: 'Sinyaller'}} name="Signal" component={Signal} />
                <Tab.Screen options={{ headerShown: false, title: 'Alarm' }} name="Alarm" component={Alarm} />
                <Tab.Screen options={{ headerShown: false, title: 'Portföy'  }} name="Portfolio" component={Portfolio} />
        </Tab.Navigator>
    )
}


function DrawerFunc(){
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerMenu {...props} />}>
        <Drawer.Screen name="HomeTab2" component={Tablar} />
      </Drawer.Navigator>
  )
}




AppRegistry.registerComponent(appName, () => Stackler);
