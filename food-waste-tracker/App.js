import LogoutPage from './src/Pages/LogoutPage'
import ForgotPassword from './src/Pages/ForgotPassword'
import MainPage from './src/Pages/MainPage'
import ProfilePage from './src/Pages/ProfilePage'
import ArcGISMap from './src/Pages/ArcGISMap'
import LeaderboardPage from './src/Pages/LeaderboardPage'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {LogBox} from 'react-native'
LogBox.ignoreAllLogs()

export default function App() {
  //Call create stack navigator function
  const Stack = createNativeStackNavigator()
  // Is loggedd in constant: changes the inital route of the stack based on whether user is logged in or not
  // const isLoggedin = AsyncStorage.getItem('loggedIn')
  // const isLoggedin = AsyncStorage.getItem('username')
  const isLoggedin = false

  return (
    //Navigation container for application. Stack consists of the login page, logout page and main application page
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedin ? 'MainPage' : 'LogoutPage'}
        screenOptions={{ headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name='LogoutPage' component={LogoutPage}></Stack.Screen>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}></Stack.Screen>
        <Stack.Screen name='MainPage' component={MainPage}></Stack.Screen>
        <Stack.Screen name='ProfilePage' component={ProfilePage}></Stack.Screen>
        <Stack.Screen name='ArcGISMap' component={ArcGISMap}></Stack.Screen>
        <Stack.Screen name='LeaderboardPage' component={LeaderboardPage}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
