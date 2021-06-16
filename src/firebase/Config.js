import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyCLB97Qd9jZKWlwYBojtI0QOjcwThKsSxg",
    authDomain: "vaccinetracker-56a02.firebaseapp.com",
    projectId: "vaccinetracker-56a02",
    storageBucket: "vaccinetracker-56a02.appspot.com",
    messagingSenderId: "695423765813",
    appId: "1:695423765813:web:d8195093f2d00227efd07c",
    measurementId: "G-NHEWTY5HS8"
  };

  
 export const Firebase=firebase.initializeApp(firebaseConfig)