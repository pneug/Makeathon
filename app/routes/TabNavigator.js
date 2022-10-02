import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../screens/SettingsScreen';
import HomeStack from './HomeStack';
import { Card, Appbar } from 'react-native-paper';
import { useTranslation } from 'react-i18next';


function TabNavigator (props) {
    const {t} = useTranslation()
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: true}}>
                <Tab.Screen 
                    name={t("navigate:home")}
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                    )}} 
                />
                <Tab.Screen 
                    name={t("navigate:setting")}
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

