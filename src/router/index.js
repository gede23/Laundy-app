import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Splash,Akun,Pesanan, SignIn,SignUp} from '../pages';
import { BottomNavigation } from '../components';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{headerShown : false}}/>
        <Tab.Screen name="Pesanan" component={Pesanan} options={{headerShown : false}} />
        <Tab.Screen name="Akun" component={Akun}options={{headerShown : false}} />
      </Tab.Navigator>
  )
}

const router = () => {
    return (
      <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}}/>
          <Stack.Screen name="MainApp" component={MainApp} options={{headerShown : false}}/>
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown : false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>

        </Stack.Navigator>
    )
  }

export default router

const styles = StyleSheet.create({})