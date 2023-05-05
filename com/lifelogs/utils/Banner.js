import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-web-swiper";




export default Banner =({image}) => {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                    from={1}
                    minDistanceForAction={1}
                    loop
                    timeout={5}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '',
                      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {''}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  > 
                      {image.map((data,i)=>{
                        console.log('aaa')
                        console.log(data, i)
                        return(
                          <Image source={{uri:data}} key={i} style={{width:'100%',height:'100%'}}></Image>
                        )
                      })}
                      
                </Swiper>
              </View>
              
          </View>
        )
    }
