import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home">
                <Tab.Screen name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        )
                    }} />
                <Tab.Screen name="Warning" component={WarningScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="alert" color={color} size={size} />
                        )
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// export default createAppContainer(HomeStack)
export default HomeStack;

