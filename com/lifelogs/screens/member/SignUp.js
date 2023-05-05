import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// 아이디와 패스워드가 null이 아니고 , 아이디는 데이터 베이스에 존재하지 않아야하고, 비밀번호는 체크를 통해 비밀번호 정보가 동일 해야한다.
// 그후 회원가입이 가능해진다.

const SignUp = ({navigation}) =>{
  const [sign, setSign] = useState(false)
  const [id,setId] = useState('')
  const [pwd,setPwd] = useState('')
  const [pwd2,setPwd2] = useState('')
  const [msg,setMsg] = useState('')

  let isPwd = false;

  const handleIdChange = (e) =>{
    setId(e)
  }
  const handlePwdChange = (e) =>{
    setPwd(e)
  }
  const handlePwd2Change = (e) =>{
    setPwd2(e)
  }


  
  const checked = () =>{
    // 데이터 베이스 조회해서 동일 아이디 조회 존재하면 false, 없으면 true값을 보낸다.

    if(pwd == pwd2 ){
      isPwd = true;
      setMsg('')
    }else if(pwd != pwd2){
      isPwd = false;
      setMsg('비밀번호가 다릅니다. !')
    }



    if(isPwd){
      Alert.alert('회원가입이 완료 되었습니다.')
      navigation.navigate('Home')
    }

  }

  



  return(
    <View style = {styles.container}>
        <View style={styles.logoBox}>
          <View style={styles.logoWrap}>
            <Text style = {styles.logo}>Life Log</Text>
          </View>
        </View>
    {/* 로고 */}
        <View style = {styles.inputBox}>
          <View style={styles.inputTextWrap}>
            <TextInput  style = {styles.inputText} placeholder="user" value = {id} onChangeText={handleIdChange}></TextInput>
          </View>
          
          <View style={styles.inputTextWrap}>
            <TextInput style={styles.inputText} placeholder="password" value = {pwd} onChangeText={handlePwdChange}></TextInput>
          </View>
            
          <View style={styles.inputTextWrap}>
            <TextInput style={styles.inputText} placeholder="password" value = {pwd2} onChangeText={handlePwd2Change}></TextInput>
          </View>
            <Text style={{alignSelf:'flex-end', paddingRight:20, color:'red'}} >{msg}</Text>
        </View>
        {/* 회원 정보 입력  */}

    <View>

      <TouchableOpacity style = {styles.joinButton} onPress= {() => {checked()}}>
        <Text style={styles.btnText}>JOIN</Text>
      </TouchableOpacity>

    </View>
      {/* 회원가입 버튼 */}
    </View>
  )
}




export default SignUp;

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    flex:1,
  },

  logoBox:{
    height:100,
    width:'100%',
    marginTop:80
  },
  logoWrap:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  logo:{
    fontSize:30,
  },

  inputBox:{
    display:'flex',
    justifyContent:'center',
    padding: 10
  },
  inputTextWrap:{
    justifyContent:'center',
    alignItems:'center',
    margin:15
  },
  inputText:{
    width:300,
    height:40,
    borderWidth:1,
  },

  joinButton:{
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#99f',
    alignSelf:'center',
  },
  btnText:{
    textAlign:'center', fontSize:18, fontWeight:600,padding:8, paddingLeft:12, paddingRight:12
  }

})


