import firebase from 'firebase/app'
import firestore from 'firebase/firestore';


const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
    apiKey: "AIzaSyDSKhrwQiRIgCJjJjjyXimTc9TTxtkD8rk",
    authDomain: "airprobeassingment.firebaseapp.com",
    databaseURL: "https://airprobeassingment.firebaseio.com",
    projectId: "airprobeassingment",
    storageBucket: "airprobeassingment.appspot.com",
    messagingSenderId: "674259300053",
    appId: "1:674259300053:web:2e242ed5ca4b4eb19bfc5c",
    measurementId: "G-D9P8FNJ5CP"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);
  export default firebase;