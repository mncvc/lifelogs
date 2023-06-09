import React,{useEffect, useState} from "react";
import { Button, Image, SafeAreaView,
  ScrollView,
  ScrollViewBase,
StyleSheet,
Text,
View,
TouchableOpacity
} from "react-native";
import storages from "../functions/FireBaseConfig";
import { getStorage,ref,getDownloadURL } from "firebase/storage";




const Card =({state,navigation}) =>{
  const [image,setImage] = useState(null);
  const [blog,setBlog] = useState({
    writter: '',
    content : '',
    img : '',
    likes: 0,
    view : 0,
    regdate : ''

  })
  const data = state;

const onPress = () =>{
  data.view += 1
  navigation.navigate("Detail",data)

}

  return(
    <TouchableOpacity onPress={() =>{onPress()}}>
      
      <View style={styles.a}>

          <View style = {styles.cardHeader}> 
            
            <View style={{width:'100%',height:'100%',flexDirection:'row',backgroundColor:'#eda'}}> 
              <View style={{width:'85%',height:'100%',flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:29,height:29,borderRadius:50, backgroundColor:'#eee', margin:7}} source={{}}></Image>
            <Text>{data.writter}</Text>
              </View>
              <View style={{width:'15%',height:'100%', justifyContent:'center'}}>
              <View style = {{width:40,height:20,alignSelf:'center'}}>
               <Text>{data.view}</Text> 
               </View>
              </View>
            </View>
            <View>
            </View>
          </View>
              <View style ={styles.imageBox}>
                <Image source= {{uri: data.img_url}} style={styles.img}/>
              </View>
        </View>
    </TouchableOpacity>
  )

}



const styles = StyleSheet.create({

  a:{
    height:280,
    width:'100%',
    marginBottom:5

  },
  imageBox:{
    width:'100%',
    height:237,
    alignItems:'flex-end',
    borderWidth:1
  },
  cardHeader:{
    width:'100%',
    height:43,
    flexDirection:'row',
    alignItems:'center'
  },
  img:{
    width:'100%',
    height:'100%'
  }


})
export default Card;