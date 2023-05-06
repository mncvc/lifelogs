import {Pressable,Text,StyleSheet, Image,SafeAreaView,TextInput, TouchableOpacity,View, TouchableWithoutFeedback, Keyboard, Button, Alert} from "react-native";
import React,{useState,useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'



import * as ImagePicker from 'expo-image-picker';
import storage, { articleRef,imgRef,getDownloadURL } from "../functions/FireBaseConfig";
import { getImage } from "../functions/FileBaseStorage";

export default function AddPost({ navigation, route }) {
  // 이미지 
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [article,setArticle] = useState({
  })


  const UploadImg = () => {
   
  //권한 등록.
      const uploadImage = async () => {
          if(!status?.granted){
              const permission = await requestPermission();
              if(!permission.granted){
                  return null;
              }
          }
  // 이미지 업로드 기능.
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        }); // 갤러리 불러오기.
          if(result.canceled){
              return null;// 이미지 업로드 취소한 경우.
          }

  
      };
      return (
          <SafeAreaView style={styles.imgBox}>
          <Pressable style={styles.uploadButton} onPress={uploadImage()}>
              <Text style={styles.imgIcon}>이미지 업로드</Text>
          </Pressable>
  
          </SafeAreaView>
  
      );
  } 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
     
      setImage(result.uri);
    }
    // 날짜 / autoincrement / 로그인 > 회원정보
   
     
  }
  
  const addData = async () => {
   // restApi연동 예정
}




  useEffect(() => {
    navigation.setOptions({
      title: '게시물 작성'
    })



  }, []);

  function onPress() {
    Alert.alert('', '글 작성이 완료되었습니다.')
    console.log({body})
    console.log("img: ", image);
    getImage(image);

      navigation.navigate('Home')
  }

    return(
      <>    
    <SafeAreaView style={{width:'100%'}}> 
        <View style={{ display: 'flex', flexDirection: 'row' }} >
          <TouchableOpacity  onPress={pickImage} style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: 120, height: 120, borderWidth: 1, borderRadius: 4, marginRight: 8 }} >
            <Ionicons name="camera-outline" size={48} color="#4d4d4d" />
            <Text style={{ fontSize:14, fontWeight: '500', color: '#4d4d4d' }} >사진업로드</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 4 }} />}
        </View>


    
      <View style={{ width: '95%',alignSelf:'center',height: '100%', marginTop:20, borderTopWidth:1 }} >
        <TextInput style={styles.input2} onChangeText={setBody} value={body} 
            placeholder="내용을 입력해주세요" multiline maxLength={40}/>
      </View>
    
  </SafeAreaView>
     <TouchableOpacity style={{ height: 40, width: 100 ,position: 'absolute', bottom: 40,right: 40, backgroundColor: '#FF7B00', display: 'flex', alignItems:"center", justifyContent: 'center', borderRadius: 8 }} onPress={() => onPress() }>
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


