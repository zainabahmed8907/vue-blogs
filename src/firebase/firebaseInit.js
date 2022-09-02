import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCq7fBczqrKu7vsjkGEyLj3PZk7Grv1UeE",
    authDomain: "fireblogs-6bb13.firebaseapp.com",
    projectId: "fireblogs-6bb13",
    storageBucket: "fireblogs-6bb13.appspot.com",
    messagingSenderId: "625195640464",
    appId: "1:625195640464:web:e865de7179cb367a061a15"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { timeStamp };
export default app.firestore();