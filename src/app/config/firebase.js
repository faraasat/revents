import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC08hyclKd7aQPtZMKMoisp33LXAWHxsyA",
  authDomain: "reventers.firebaseapp.com",
  databaseURL: "https://reventers.firebaseio.com",
  projectId: "reventers",
  storageBucket: "reventers.appspot.com",
  messagingSenderId: "1058380117939",
  appId: "1:1058380117939:web:79892b8a5cee11fb913dc6",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
