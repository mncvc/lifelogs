

import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ChtCard from "../../components/ChtCard";



export default ChtList = ({navigation,route}) =>{
  let listMap = [1,2,3,4,5,6,7,8,9]


  return(

<SafeAreaView style ={styles.container}>
  <ScrollView>


   {listMap.map((data,i) => {
     return( <ChtCard component = {data} key = {i} navigation = {navigation}/>
)   })
   }
  </ScrollView>
   
</SafeAreaView>


  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'

  }


})