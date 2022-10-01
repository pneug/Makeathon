import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen'
import WeatherScreen from '../screens/WeatherScreen';
import WarningScreen from '../screens/WarningScreen';

const Stack = createStackNavigator()

const HomeStackScreenNavigator = () => {
    return (<Stack.Navigator>
                <Stack.Screen name = 'Home' component = {HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name = 'Camera' component = {CameraScreen} options={{ headerShown: false }}/>
                <Stack.Screen name = 'Warning' component = {WarningScreen} options={{ headerShown: false }}/>
                <Stack.Screen name = 'Weather' component = {WeatherScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>);
}

export default HomeStackScreenNavigator


