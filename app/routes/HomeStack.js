import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen'
import WeatherScreen from '../screens/WeatherScreen';
import WarningScreen from '../screens/WarningScreen';

const screens = {
    Home: {
        screen: HomeScreen
    },
    Camera: {
        screen: CameraScreen
    },
    Warning: {
        screen: WarningScreen
    },
    Weather: {
        screen: WeatherScreen
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)


