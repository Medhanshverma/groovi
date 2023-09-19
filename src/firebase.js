import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdOfAXiIleb-JylpfTwTnEd4LZza9V2-w",
    authDomain: "groovi-5b0c1.firebaseapp.com",
    projectId: "groovi-5b0c1",
    storageBucket: "groovi-5b0c1.appspot.com",
    messagingSenderId: "748240450059",
    appId: "1:748240450059:web:ba124db40858f18e1acd0e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};