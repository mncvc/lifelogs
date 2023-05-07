import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Storage = {
  
  async get(key) {
    
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      throw new Error('Failed to load logs');
    }
  },
  async set(key,data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save ' + key);
    }
  },
  async remove(key){
    try {
      await AsyncStorage.removeItem(key);
      console.log(`'${key}' successfully removed from storage.`);
    } catch (error) {
      console.error(`Error removing '${key}' from storage: ${error}`);
    }
  }



};


export default Storage;
