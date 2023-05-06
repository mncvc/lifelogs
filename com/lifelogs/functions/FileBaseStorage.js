import storages from "./FireBaseConfig";
import { getStorage,ref,getDownloadURL } from "firebase/storage";

export default uploadImage = async (blob,data) =>{

  const storageRef = storages.ref().child('article/')
  const snapshot = await storageRef.put(blob);
  blob.close;

}

  
