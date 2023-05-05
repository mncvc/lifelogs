import React from "react";
import { Alert, Button, View } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import SignIn from "../screens/member/SignIn";
import SignUp from "../screens/member/SignUp";
import AddPost from "../screens/AddPost";
import Detail from '../screens/Detail'


const Stack = createStackNavigator();


export const  MainStackNavi = ({navigation}) =>{
  return(
<Stack.Navigator
  initialRouteName="Home"
  screenOptions={{
    // headerShown:false,
    title:'Life Log',
    headerBackTitle:'',
    headerRight:() => (
      <Button title="a" onPress = {()=>navigation.navigate('AddPost')}>

    </Button>)
  }}
>
    <Stack.Screen name = 'Home' component={Home}></Stack.Screen>
    <Stack.Screen name = 'Detail' component={Detail}></Stack.Screen>
    <Stack.Screen name = 'AddPost' component={AddPost}></Stack.Screen> 
    <Stack.Screen name = 'SignIn' component={SignIn}></Stack.Screen>
    <Stack.Screen name = 'SignUp' component = {SignUp} options={{headerShown:false}}></Stack.Screen>

</Stack.Navigator>
  )
}

import ChtList from "../screens/chat/ChtList";
import ChtRoom from "../screens/chat/ChtRoom";



const ChtStack = createStackNavigator();

export const ChtStackNavi =({navigation}) =>{
  return(
    <ChtStack.Navigator
      initialRouteName="FriendList">
    
        <ChtStack.Screen name = 'FriendList' component={ChtList}></ChtStack.Screen>
        <ChtStack.Screen name= 'ChattingRoom' component={ChtRoom}></ChtStack.Screen>


    </ChtStack.Navigator>

  )
}

export default MainStackNavi;




