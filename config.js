import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDOLozTY6cgJLUlX5VyHZjQBzjym8_AsEk",
  authDomain: "bedtime-story-c5d8e.firebaseapp.com",
  databaseURL: "https://bedtime-story-c5d8e.firebaseio.com",
  projectId: "bedtime-story-c5d8e",
  storageBucket: "bedtime-story-c5d8e.appspot.com",
  messagingSenderId: "670286711558",
  appId: "1:670286711558:web:b536a7594994db58ebec87"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
