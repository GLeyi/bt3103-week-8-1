import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuPvvzay0ks1aa9fUH-zzqG5uzbjzMyD8",
    authDomain: "bt3103-week-6-14dad.firebaseapp.com",
    projectId: "bt3103-week-6-14dad",
    storageBucket: "bt3103-week-6-14dad.appspot.com",
    messagingSenderId: "1057019060896",
    appId: "1:1057019060896:web:fd4a7c95c2c611969b9fc5",
    measurementId: "G-72DEVGH7JW"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;