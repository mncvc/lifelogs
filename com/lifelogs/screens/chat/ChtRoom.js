import React,{useEffect, useState} from "react";
import ChatInput from "../../components/chat/ChatInput"
import ChatMessages from "../../components/chat/ChatMessages"

import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';


const ChtRoom = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({ tabBarStyle : {display: 'none' }});

    console.log(1)

  }, [navigation]);

  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    const newMessage = {
      id: messages.length + 1,
      user: 'Me',
      text: text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <KeyboardAvoidingView styles = {styles.container}>

        <ChatMessages messages={messages} />

        <View style = {{borderWidth:1,justifyContent:'flex-end', }}>
          
        <ChatInput onSend={handleSend}/>
        </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height: '100%',
    backgroundColor: '#aaa',
    borderWidth:1
  },
  textInputbox:{


  }





});

export default ChtRoom;