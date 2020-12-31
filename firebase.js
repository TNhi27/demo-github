// For Firebase JS SDK v7.20.0 and later, measurementId is optional



var firebase = require("firebase/app");



const firebaseConfig = {
    apiKey: "AIzaSyDrgogcQHnX-hVxXJ5tOwxnj6rgLspcd6Q",
    authDomain: "fir-10c7a.firebaseapp.com",
    databaseURL: "https://fir-10c7a-default-rtdb.firebaseio.com",
    projectId: "fir-10c7a",
    storageBucket: "fir-10c7a.appspot.com",
    messagingSenderId: "363581135094",
    appId: "1:363581135094:web:4e51f9f4e8be6c82efb4d7",
    measurementId: "G-7FBT502330"
};

const db = firebase.default.initializeApp(firebaseConfig);


export default db;