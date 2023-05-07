import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button, Image, SafeAreaView,
  ScrollView,
  ScrollViewBase,
StyleSheet,
Text,
TouchableOpacity,
View
} from "react-native";
import { Dimensions } from "react-native";
import Card from "../components/Card";
import Storage from "../utils/Storage";
import storages, { firebase_db } from "../functions/FireBaseConfig";

import { getStorage,ref,getDownloadURL } from "firebase/storage";

const WIDTH = Dimensions.get('screen').width


const Home = ({navigation}) =>{

  const [blogs,setBlogs] = useState([])
  const [login,setLogin] = useState({});
  const [image,setImage] = useState(null);


useEffect(()=>{
  setTimeout(()=>{
    axios.get(`http://localHost:8080/article`).then((response)=>{
      setBlogs(response.data)
      console.logg(response.data)
    }
    ).catch((response)=>{console.log(error)});

  },3000)
  // const storageRef = ref(storages, "article/img1.jpeg");
  // // Get the download URL
  // getDownloadURL(storageRef)
  //   .then((url) => {
  //     setImage(url);
  //   })
  //   .catch((e) => {
  //     console.log(error.code)
  // });

},[])
  




  return (
    <SafeAreaView>
    <ScrollView>
      <SafeAreaView style = {styles.container}>
      <View style = {styles.nButton}> 
            <View style={styles.nBtn}>
     <Button style={styles.nBtn} title = 'a2' onPress = {() => {a2()}}> </Button>  
      </View>
      <View style={styles.nBtn}>
      <Button  style={styles.nBtn} title = 'AddPost' onPress = {() => {navigation.navigate('AddPost') }}> </Button>  
      
      </View>
      <View style={styles.nBtn}>
      <Button style={styles.nBtn}  title = 'Login' onPress = {() => {navigation.navigate('SignIn') }}> </Button>  
      </View>
     <View style={styles.nBtn}>
     <Button  style={styles.nBtn} title = 'SignUp' onPress={() =>{navigation.navigate('SignUp')}}></Button>
     </View>
     
    <View style={styles.nBtn}>
      
    </View>

      </View>

{/* feed component 제작 */}
      <View style={styles.box}>
      {blogs.map((data,i) =>{
        return(<Card state = {data} key={i} navigation={navigation}></Card>)
      })}    
       
    

      </View>


{/* end */}


      </SafeAreaView>
    </ScrollView>

    </SafeAreaView>
  )
}






export default Home;


const styles =  StyleSheet.create({


  container:{
    display:'flex',
    alignItems:'center'
  },
nButton:{
width:WIDTH,
display:'flex',
flexWrap:'wrap-reverse',
flexDirection:'row',
justifyContent:'space-between'
},
nBtn:{
  width: WIDTH / 4,
  height:40,
  borderWidth:1
},

  font :{
    fontSize:24,

  },
  box:{
    width:WIDTH - 10,
    flexWrap:'wrap',
    flexDirection:'row',
  },


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




});