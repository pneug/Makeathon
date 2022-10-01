import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WarningScreen from '../screens/WarningScreen';
import HomeStack from './HomeStack';
import { Card } from 'react-native-paper';


function TabNavigator () {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{headerShown: true}}>
                <Tab.Screen name="Home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        )}} />
                <Tab.Screen name="Warning"
                    component={WarningScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="alert" color={color} size={size} />
                        )}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// export default createAppContainer(HomeStack)
export default TabNavigator;

