import React, { useEffect,useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import Banner from "../utils/Banner";
import axios from "axios";
import Storage from "../utils/Storage";

import { useIsFocused } from '@react-navigation/native';



const WIDTH = Dimensions.get('screen').width;


const Detail = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const [likes, setLikes] = useState();
useEffect(()=>{
  isCheckId();
 axios.put(`http://localHost:8080/article/${route.params.idx}`,route.params).then((e)=>{

 }).catch((e)=>{
  console.log(error)
 })
setLikes(route.params.likes);

},[isFocused])


const [state,setState] = useState({});
const [images,setImages] = useState([]);

const isCheckId = () =>{
  
   Storage.get("login").then((e)=>{
    if(route.params.writter ==e.id ){
      getData(true);
    }else {
      getData(false);
    }
  }).catch((e)=>{
    console.log(error.code)
    getData(false)
  })

}
const [isId, setIsId] = useState(false);

const getData = (res) =>{
  setIsId(res);
}



const like = () =>{
  route.params.likes += 1;
  setLikes(route.params.likes);
  console.log(route.params.likes)
  axios.put(`http://localHost:8080/article/${route.params.idx}`,route.params).then((e)=>{
  
}).catch((e)=>{
 console.log(error)
})
}


return(
<SafeAreaView style={styles.container}>
 
  <ScrollView>
    
    <View style={styles.section}>
      {/* 작성자 정보 */}
      <View style = {styles.header}>
        <View style={styles.profile}>
          <View></View>
        <Text>{route.params.writter}</Text>
        </View>
      </View>

  

<ScrollView horizontal={true} style={{width:'100%', flex:1}}>
      <View style={styles.img}>
        <Image source={{uri:route.params.img_url}} style={{width:'100%',height:'100%'}}></Image>

      </View>
      <View style={styles.img}>
        {/* <Image source={{uri:'gs://lifelogs-e0f2e.appspot.com/article/img1.jpeg'}} style={{width:'100%',height:'100%'}}></Image> */}
      </View>
      </ScrollView>
{/* 디자인 기능 수정 필요 listMap */}


      <View style={styles.infoBox}>
        {/* share, like , view, hashtag */}
        <View style={{width:'60%',height:'100%'}}></View>
          <View style={{width:'40%',height:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
            <View style={{width:18,height:18,borderWidth:1,marginRight:8}}>
            <TouchableOpacity style = {{width:'100%', height:'100%'}} onPress ={()=>{like()}}/>
            </View>
            <Text>{likes}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{width:18,height:18,borderWidth:1,marginRight:8}}>
             
            </View>
            <Text>{route.params.view}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{width:18,height:18,borderWidth:1,marginRight:8}}>
              {
              isId? <View style = {{backgroundColor:'red',width:'100%',height:'100%'}}>
                <TouchableOpacity onPress = {()=>{Alert.alert("삭제")}} style = {{backgroundColor:'red',width:'100%',height:'100%'}}></TouchableOpacity>
              </View>:
              <View style = {{width:'100%',height:'100%'}}></View>
              // 회원 정보가 맞으면 삭제 버튼 생성.없으면 아무버튼 안생김.
              }
            </View>
          
            </View>
            
        </View>

      
      </View>
      <View style={styles.bodyWrap}>
        <View style={styles.content}>
          <Text>{route.params.body}</Text> 
        </View>

          <View style={styles.commentWrap}>
          <View></View>
          <View></View>
        </View>

      </View>
    </View>


  </ScrollView>

  </SafeAreaView>

)
}



export default Detail;

const styles = StyleSheet.create({
  container:{
    width:WIDTH,
    display:'flex',
    alignItems:'center'
  },
  section:{
    width:WIDTH - 10,
     borderWidth:1,
      justifyContent:'center',
  },
  header:{
    height:40,
    width:'100%',
    flexDirection:'row'

  },
  profile:{
    width:200,
    height:'100%',
    borderWidth:1
  },
  img:{
    width:WIDTH,
    height:380,
    borderWidth:1,
  },
  infoBox:{
    width:'100%',
    height:40,
    flexDirection:'row'
  },
  bodyWrap:{
    width:'100%',
    height:500,
  },
  content:{
    width:'100%',
    minHeight:80,
    paddingTop: 10,
    paddingBottom:30,
    paddingRight:10,
    paddingLeft:10,
    borderWidth:1

  },
  commentWrap:{
    width:'100%',
    minHeight:40,
    borderWidth:1
  }



})

