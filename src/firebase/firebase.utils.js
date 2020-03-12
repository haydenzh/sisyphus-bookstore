import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzvRR9Cte2MinPF6kJHn9F-IMO2i_uVVg",
  authDomain: "sisyphus-bookstore.firebaseapp.com",
  databaseURL: "https://sisyphus-bookstore.firebaseio.com",
  projectId: "sisyphus-bookstore",
  storageBucket: "sisyphus-bookstore.appspot.com",
  messagingSenderId: "257841831640",
  appId: "1:257841831640:web:490db96c60f89aa94b81ad",
  measurementId: "G-8FCZDSTC7E"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;