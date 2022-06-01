import React from 'react'
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { userAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBx6VUExSpLk-T6hGqFKm_idPTKXZt2oic",
    authDomain: "chat1-8bd04.firebaseapp.com",
    projectId: "chat1-8bd04",
    storageBucket: "chat1-8bd04.appspot.com",
    messagingSenderId: "487838768485",
    appId: "1:487838768485:web:240eb768fc07c6baaf958c",
    measurementId: "G-E8Q4MN4GGK"

})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">


       
    
    </div>
  );
}

export default App;
