import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './app/routes/TabNavigator';

export default function App() {
  return <Navigator/>;
}

