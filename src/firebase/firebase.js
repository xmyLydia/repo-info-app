import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAN3UZJYNPz4HNdGj9aMgZd1jgh93ORrSk",
    authDomain: "git-info-app.firebaseapp.com",
    databaseURL: "https://git-info-app-default-rtdb.firebaseio.com",
    projectId: "git-info-app",
    storageBucket: "git-info-app.appspot.com",
    messagingSenderId: "450106870391",
    appId: "1:450106870391:web:25c24caf53d5ae6be75472"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.OAuthProvider('google.com');
export { firebase, googleAuthProvider, database as default };
