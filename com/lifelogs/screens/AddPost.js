import {Pressable,Text,StyleSheet, Image,SafeAreaView,TextInput, TouchableOpacity,View, TouchableWithoutFeedback, Keyboard, Button, Alert} from "react-native";
import React,{useState,useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import { getStorage,ref,getDownloadURL,uploadBytesResumable } from "firebase/storage";

import * as ImagePicker from 'expo-image-picker';
import storages, { articleRef,imgRef,uploadBytes } from "../functions/FireBaseConfig";
import { imageUpload } from "../functions/FileBaseStorage";
import Storage from "../utils/Storage";
import IsCheckLogin from "../functions/IsCheckLogin";

export default function AddPost({ navigation, route }) {
  // 이미지 
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [body,setBody] = useState("")
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [blog,setBlog] = useState({
  });


  useEffect(() => {
    navigation.setOptions({
      title: '게시물 작성'
     
    })
console.log("33333333")
    // let id = Storage.get("login").then((e)=>{
    //   console.log(e.id)
    // }).catch((e)=>{
    //   console.log(error)
    // })
    
let a = IsCheckLogin.getId().then((e)=>{console.log("login : ",e)}).catch((e)=>{console.log(error)});
console.log("whe",a);
  }, []);




const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const source = { uri: result.uri };
    console.log(source);
    setImage(source);

};
const uploadImage = async () => {

  setUploading(true);
  const response = await fetch(image.uri)
  const blob = await response.blob();
  const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
  const file = "article/" + filename;
  const storageRef = ref(storages, file);
 

  uploadBytesResumable(storageRef, blob).then((snapshot) => {
    console.log('Uploaded a blob or file!');

  }).catch((e)=>{
    console.log(error)
  }).finally((e)=>{
    getDownloadURL(storageRef)
    .then((url) => {
      setImage(url)
      console.log(url)
    })
    .catch((e) => {
      console.log(error.code)
      console.log("실패")
  }).finally((e)=>{
    console.log("path: ",image)
    console.log("body : ",body)
  });

  });
  
  
};

  

  




  const onPress = () => {
    Alert.alert('', '글 작성이 완료되었습니다.')
      navigation.navigate('Home')
       uploadImage();
   
  }

    return(
      <>    
    <SafeAreaView style={{width:'100%'}}> 
        <View style={{ display: 'flex', flexDirection: 'row' }} >
          <TouchableOpacity  onPress={pickImage} style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: 120, height: 120, borderWidth: 1, borderRadius: 4, marginRight: 8 }} >
            <Ionicons name="camera-outline" size={48} color="#4d4d4d" />
            <Text style={{ fontSize:14, fontWeight: '500', color: '#4d4d4d' }} >사진업로드</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image.uri }} style={{ width: 120, height: 120, borderRadius: 4 }} />}
        </View>

      <View style={{ width: '95%',alignSelf:'center',height: '100%', marginTop:20, borderTopWidth:1 }} >
        <TextInput style={styles.input2} onChangeText={setBody} value={body} 
            placeholder="내용을 입력해주세요" multiline maxLength={40}/>
      </View>
    
  </SafeAreaView>
     <TouchableOpacity style={{ height: 40, width: 100 ,position: 'absolute', bottom: 40,right: 40, backgroundColor: '#FF7B00', display: 'flex', alignItems:"center", justifyContent: 'center', borderRadius: 8 }} onPress={() => onPress()}>
      <Text style={{ color: 'white', fontWeight: '600' }} >추가하기</Text>
      </TouchableOpacity>
  </>
)};







const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    marginLeft:10,
    marginRight:10
  },
  row:{
    flexDirection:'row',
    paddingTop:10,
  paddingBottom:5,
    alignItems:'center',
    borderBottomWidth: 1,
    borderColor:'#d4d4d4',
    marginTop: 4
  },
  imgBox:{
    width: 110,
    height: 110,
    borderWidth:1.5,
    borderRadius:5,
    borderColor:'#aaa',
    marginTop:10
  },
  uploadButton:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    color:'fff'

  },
  imgIcon:{
    textAlign:'center',
  },

  input: {
    width:'75%',
  },
  purchase:{
    width:100,
    padding:3,
    borderRadius:10,
    backgroundColor:'#d2d2d2'
  },

  input2: {
    width:'80%',
    margin: 12,
    padding: 10,
    alignSelf:'center',
    padding:10
    
  },
  desc:{
    fontSize:18,
    padding:5,
    borderBottomWidth:2,
    borderColor:'#aaa'

  },
  cardImage:{
    width:100,
    height:100
  },
 
text:{
  fontSize:14,
  fontWeight: '500',
  marginBottom: 4
},
contentBox:{
  width:340,
  height: 260,
  borderTopWidth:0.5,
  borderColor:'#aaa'
},
radioGroup:{
  display:'flex',
  width:'80%',
  alignSelf:'flex-end',
  justifyContent:'space-around',
  flexDirection:'row',
  
},
submit:{
  display:'flex',
  justifyContent:'center',
  alignSelf:'center',
  width:80,
  height:50,
  borderWidth:2,
  borderColor:'#ddd'
},
buttonText:{
  textAlign:'center'
}


});


