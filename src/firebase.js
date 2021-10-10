// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'

import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDoKRRyQ86XQg9m01Y8hSAfzjPNS3wSGAs",
  authDomain: "clone-6db74.firebaseapp.com",
  projectId: "clone-6db74",
  storageBucket: "clone-6db74.appspot.com",
  messagingSenderId: "69401409802",
  appId: "1:69401409802:web:2a0a9cf393acae4124a2f3",
  measurementId: "G-H5WC0M3GQ7"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()