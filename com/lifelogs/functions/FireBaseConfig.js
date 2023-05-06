///import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
//import "firebase/functions";
import { getStorage,ref,getDownloadURL } from "firebase/storage";

import { initializeApp } from "firebase/app";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyBYWPkn1kwujJI77yPgdV7zcgU4tnZCEoc",
  authDomain: "lifelogs-e0f2e.firebaseapp.com",
  databaseURL: "https://lifelogs-e0f2e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lifelogs-e0f2e",
  storageBucket: "lifelogs-e0f2e.appspot.com",
  messagingSenderId: "366955341417",
  appId: "1:366955341417:web:7928c1ae941eafeffbe4f8",
  measurementId: "G-PL550823EL",
  storageBucket: 'gs://lifelogs-e0f2e.appspot.com'
};

export let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

export const db = app.firestore();
export const auth = firebase.auth();
//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
/*if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}*/
export const firebase_db = firebase.database()

const storages = getStorage(app);

// Points to the root reference


export default storages;



