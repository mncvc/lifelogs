import React, { useEffect,useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import Banner from "../utils/Banner";
import axios from "axios";

const WIDTH = Dimensions.get('screen').width;


const Detail = ({navigation, route}) => {

const [state,setState] = useState({});
const [images,setImages] = useState([]);
const idx = route.params.idx;

const getArticle = () =>{
  axios.get(`http://localHost:8080/article/detail/${idx}`).then((response)=> {
  setState(response.data);
  setImages(response.data.images);

  // console.log("ㅁㄴㅇ",response.data);
}).catch((response)=>{console.log(error)})

}


useEffect(()=>{
  getArticle();
console.log(route.params)

},[])


console.log("작성자 : ",state.writter)

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
        {/* <Image source={{uri:route.params.img[0]}} style={{width:'100%',height:'100%'}}></Image> */}
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
            <View style={{width:18,height:18,borderWidth:1,marginRight:8}}></View>
            <Text>{route.params.like}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{width:18,height:18,borderWidth:1,marginRight:8}}></View>
            <Text>{route.params.like}</Text>
            </View>
            <View style={{width:18,height:18,borderWidth:1,marginRight:8}}></View> 
        </View>

      
      </View>
      <View style={styles.bodyWrap}>
        <View style={styles.content}>
          <Text>{route.params.content}</Text> 
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

