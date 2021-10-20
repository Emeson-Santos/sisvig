import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

let firebaseConfig = {
  apiKey: "AIzaSyDW2d8Fdiy67C7GPlC0KNFfGUNLlfp1STI",
  authDomain: "sisvig-a5fb9.firebaseapp.com",
  projectId: "sisvig-a5fb9",
  storageBucket: "sisvig-a5fb9.appspot.com",
  messagingSenderId: "698464949659",
  appId: "1:698464949659:web:f27b0fe4c80093c8137d3e",
  measurementId: "G-5MVDYKW24W"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;