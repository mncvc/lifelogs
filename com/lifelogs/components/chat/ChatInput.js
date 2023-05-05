import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim().length > 0) {
      onSend(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="메시지를 입력하세요"
        placeholderTextColor="#999"
        
      />
      <Button title="전송" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
  }
})

export default ChatInput