import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WarningScreen from '../screens/WarningScreen';
import WeatherScreen from '../screens/WeatherScreen';
import HomeStack from './HomeStack';


function TabNavigator () {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: true
                }}>
                <Tab.Screen name="Home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        )
                    }} />
                <Tab.Screen name="Warning"
                    component={WarningScreen} 
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
export default TabNavigator;

