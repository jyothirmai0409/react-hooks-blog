import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8f8tnhwxQZx7Db29_DbL8GUgIkbONiSg",
  authDomain: "react-blog-b568d.firebaseapp.com",
  projectId: "react-blog-b568d",
  storageBucket: "react-blog-b568d.appspot.com",
  messagingSenderId: "997452676132",
  appId: "1:997452676132:web:59c3e6c9de5c221e7e6cb1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
