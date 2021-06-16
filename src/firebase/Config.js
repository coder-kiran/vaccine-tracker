import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaTeLAOdeZBDjBpYn7cSvufzj1z7E2Ouw",
  authDomain: "sulathavaccinetracker.firebaseapp.com",
  projectId: "sulathavaccinetracker",
  storageBucket: "sulathavaccinetracker.appspot.com",
  messagingSenderId: "1025656936167",
  appId: "1:1025656936167:web:5dd340e9801676701cb442",
  measurementId: "G-XS9M1EETQD"
};

  
 export const Firebase=firebase.initializeApp(firebaseConfig)