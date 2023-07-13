import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reventers.firebaseapp.com",
  databaseURL: "https://reventers.firebaseio.com",
  projectId: "reventers",
  storageBucket: "reventers.appspot.com",
  messagingSenderId: "1058380117939",
  appId: "1:1058380117939:web:79892b8a5cee11fb913dc6",
};

export const app = initializeApp(firebaseConfig);
