import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA47N_h-FHm0Yg3CCBC7ub_L8farkWiESE",
  authDomain: "forum-8777b.firebaseapp.com",
  projectId: "forum-8777b",
  storageBucket: "forum-8777b.appspot.com",
  messagingSenderId: "224307964774",
  appId: "1:224307964774:web:5088c7886c881232dcb6a7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);