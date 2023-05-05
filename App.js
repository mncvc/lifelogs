import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './com/lifelogs/screens/Home';
import SignUp from './com/lifelogs/screens/member/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavi from './com/lifelogs/navigations/BottomTabNavi';
import MainStackNavi from './com/lifelogs/navigations/StackNavi';


export default function App() {
  return (

    <NavigationContainer>
    <BottomTabNavi/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
