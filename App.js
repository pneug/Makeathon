import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './app/routes/HomeStack'

export default function App() {
  return <Navigator/>;
}

