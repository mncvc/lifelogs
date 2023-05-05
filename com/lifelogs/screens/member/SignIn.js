import React, { useEffect, useState } from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import testData from '../../../../testData.json'
import axios from "axios";
import Storage from "../../utils/Storage";

function SignIn({navigation}){

  const [userId, setUserId] = useState('')
  const [pwd , setPwd] = useState('')
  
  const data = testData.member;
  let isLogin = false;


const onClickLogin = () =>{

  console.log({userId},":::",{pwd})
  axios.get(`http://localHost:8080/member/login?userId=${userId}&pwd=${pwd}`)
    .then(function (response) {
      console.log(response.data.id)
      isLogin = true;
      Storage.set("login",response.data);
    Alert.alert("로그인 Ok")
    navigation.navigate('Home')
    })
    .catch(function (error) {
      console.log(error);
    Alert.alert("로그인 실패")
    });
  
}
  

const handleIdChange = e => {
  setUserId(e);
};

const handlePwdChange = e => {
  setPwd(e);
};

return(
<SafeAreaView style = {styles.container}>
  <View style = {styles.logo}>
    <Text>로그인</Text>

  </View>

  <View style= {styles.loginForm}>

    <TextInput style={styles.text} placeholder="Users"  value = {userId} 
    onChangeText={handleIdChange}
    autoCapitalize="none"
    />
    
    <TextInput style ={styles.text} placeholder="Password"  value = {pwd} onChangeText ={handlePwdChange}
    secureTextEntry={true}/>
     
    <Button title ="로그인" onPress = {() =>{onClickLogin()}}></Button>


  </View>



</SafeAreaView>

)
}



export default SignIn;


const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#eee',
    display:'flex',
    alignItems:'center'

  },
  logo:{
    width:380,
    height:100,
    backgroundColor:'#eda',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    width:300,
    height:40,
    borderWidth:1,
    marginTop:10,
    borderRadius:8
  }

})


// 로그인 기능 알고리즘 : 