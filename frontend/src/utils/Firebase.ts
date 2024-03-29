// https://zenn.dev/k_logic24/articles/react-auth-with-firebase

import 'firebase/auth';
import 'firebase/database';

import firebase from 'firebase/app';

const config = {
  apiKey: process.env.FIREBASE_KEY,
  //appId: process.env.FIREBASE_APP_ID,
  appId: '1:441504308723:web:f18579e0d49696071b0686', // TODO: replace this.
  authDomain: process.env.FIREBASE_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
};

// initializeを複数回走らせない
if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
export { auth, database };
