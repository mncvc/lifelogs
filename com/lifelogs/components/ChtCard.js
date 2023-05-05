import React from "react";

import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import testData from '../../../testData.json';

const WIDTH = Dimensions.get('screen').width;

const ChtCard = ({navigation}) =>{

let mem = testData.member[0];

const ClickChtRoom = () =>{

  navigation.navigate("ChattingRoom")
}


return(

<TouchableOpacity style = {styles.container} onPress = {() =>{  navigation.navigate('ChattingRoom')}}>
  {/* 상대방 프로필 이미지 */}
  <View style = {styles.profile_Y}>
    <Image source={{uri:mem.img}} style={styles.profile_Y}></Image>
  </View>
  {/* 상대방 이름 & 마지막 문자 내용 */}
  <View style={styles.section}>
    <View style ={styles.section_name}>
      <Text>{mem.id}</Text>
    </View>
    <View style = {styles.section_body}>
      <Text> 내용이 어쩌구 저쩌구</Text>
    </View>
    
  {/* 세팅 툴 */}
  </View>
  <View style = {styles.section02}>
  <View style = {styles.section_date}>
      <Text>04-05</Text>
    </View>
  </View>

</TouchableOpacity>
)


}

export default ChtCard;



const styles = StyleSheet.create({

  container:{
    width:WIDTH,
    height:70,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:5,
    backgroundColor:'#eff'

  },
  profile_Y:{
    width:70,
    height:70,
    borderRadius:25,
  },
  section:{
    width:160,
    height:'100%',
    flexDirection:'column',

  },
  section_name:{
    width:'100%',
    height:30,
},
  section_body:{
    width:'100%',
    height:40,
    alignItems:'flex-end',
    
  },
  section_date:{
    width:'100%',
    alignItems:'flex-end'
  },
  section02:{
    width:60,
    height:'100%',
  }



})





