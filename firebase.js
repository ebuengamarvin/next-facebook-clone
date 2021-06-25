import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAfz8HqilOQyOyQXxEw8mOFwszAgWZh0mc',
  authDomain: 'next-facebook-clone-9ea5d.firebaseapp.com',
  projectId: 'next-facebook-clone-9ea5d',
  storageBucket: 'next-facebook-clone-9ea5d.appspot.com',
  messagingSenderId: '705595453734',
  appId: '1:705595453734:web:46717587d17689e68c51e7',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
