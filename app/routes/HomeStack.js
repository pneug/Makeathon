import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import CameraScreen from '../screens/CameraScreen'
import WeatherScreen from '../screens/WeatherScreen';
import WarningScreen from '../screens/WarningScreen';
import DetailScreen from '../screens/DiseaseDetail';

const Stack = createStackNavigator();

function HomeStack (props) {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            <Stack.Screen name="WarningScreen" component={WarningScreen} />
            <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
            <Stack.Screen name="DiseaseScreen">
                {props => <DetailScreen {...props} diseaseIdx={0} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
export default HomeStack;
