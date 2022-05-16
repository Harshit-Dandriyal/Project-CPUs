import { initializeApp  } from 'firebase/app';
import {getAuth,
signInWithPopup,
signInWithRedirect,
GoogleAuthProvider
} from 'firebase/auth';
import {getFirestore, doc, getDoc ,setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC3eQIvtouGRd8d2SwWLZCXmxjt9wurTM",
    authDomain: "comp-parts-db.firebaseapp.com",
    projectId: "comp-parts-db",
    storageBucket: "comp-parts-db.appspot.com",
    messagingSenderId: "304966073428",
    appId: "1:304966073428:web:6febfb9219dba31814c1c1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    promt : "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

  }