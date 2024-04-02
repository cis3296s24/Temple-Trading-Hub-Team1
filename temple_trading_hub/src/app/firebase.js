import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLVJKgqIE9CaG4-zCqOqBeoqpF_f_cfQ4",
  authDomain: "temple-trading-hub.firebaseapp.com",
  projectId: "temple-trading-hub",
  storageBucket: "temple-trading-hub.appspot.com",
  messagingSenderId: "841578627735",
  appId: "1:841578627735:web:2a7f662f2105350b365fd2",
  measurementId: "G-VMJV7M1R0Z",
  databaseURL: "https://temple-trading-hub-default-rtdb.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
