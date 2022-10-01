import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen'
import WeatherScreen from '../screens/WeatherScreen';
import WarningScreen from '../screens/WarningScreen';

const Stack = createStackNavigator();

function HomeStack (props) {
    return (
        <Stack.Navigator
            initialRoutName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="Warning" component={WarningScreen} />
            <Stack.Screen name="Weather" component={WeatherScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;

