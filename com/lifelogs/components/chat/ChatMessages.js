import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ChatMessages = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.message}>
          <Text style={styles.messageUser}>{item.user}</Text>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  messageUser: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatMessages;
