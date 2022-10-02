import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../screens/SettingsScreen';
import HomeStack from './HomeStack';
import { Card, Appbar } from 'react-native-paper';


function TabNavigator (props) {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: true}}>
                <Tab.Screen 
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                    )}} 
                />
                <Tab.Screen 
                    name="Settings"
                    component={SettingsScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="cog" color={color} size={size} />
                    )}} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// export default createAppContainer(HomeStack)
export default TabNavigator;

