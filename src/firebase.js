import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCe5-QK9Ldog9YKGNGCaTcGVEfT_CFSj14",
  authDomain: "slack-clone-backend-2021.firebaseapp.com",
  projectId: "slack-clone-backend-2021",
  storageBucket: "slack-clone-backend-2021.appspot.com",
  messagingSenderId: "26682738725",
  appId: "1:26682738725:web:248c01135e1bfb363517cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
