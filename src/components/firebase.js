import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAf48tgYOsBiqJSy3BoR1sY4shaXqBUSxA",
  authDomain: "easbackend.firebaseapp.com",
  databaseURL: "https://easbackend-default-rtdb.firebaseio.com",
  projectId: "easbackend",
  storageBucket: "easbackend.appspot.com",
  messagingSenderId: "682837472268",
  appId: "1:682837472268:web:c518ecf70c42958fd8ea29",
  measurementId: "G-6Y65J7SY2B"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();
export { auth, db };
export default firebase;
