import HomeStackScreenNavigator from './app/routes/HomeStack';
import ProfileStack from './app/routes/ProfileStack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={HomeStackScreenNavigator}/>
        <Tab.Screen name="Profile" component={ProfileStack}/>
      </Tab.Navigator>
    </NavigationContainer>);
}

