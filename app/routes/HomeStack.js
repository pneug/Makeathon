import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import CameraScreen from '../screens/CameraScreen'
import WeatherScreen from '../screens/WeatherScreen';
import WarningScreen from '../screens/WarningScreen';

const Stack = createStackNavigator();

function HomeStack (props) {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            <Stack.Screen name="WarningScreen" component={WarningScreen} />
            <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        </Stack.Navigator>
    );
}
export default HomeStack;
