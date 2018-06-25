import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyB6Uh_GCVQ5g0SvyjlLhYdDpwyaRZYQcDc",
  authDomain: "movie-app-9aef8.firebaseapp.com",
  databaseURL: "https://movie-app-9aef8.firebaseio.com",
  projectId: "movie-app-9aef8",
  storageBucket: "movie-app-9aef8.appspot.com",
  messagingSenderId: "41981486003"
};
firebase.initializeApp(config);


export const firebaseAuth = firebase.auth;
export const firebaseDatabase = firebase.database;