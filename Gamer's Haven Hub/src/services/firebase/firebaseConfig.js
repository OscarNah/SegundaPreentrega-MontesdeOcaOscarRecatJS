import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDzpf_rgh0hyHSCPQItHnFthkw-wuE16W8",
  authDomain: "gamer-shavenhub.firebaseapp.com",
  projectId: "gamer-shavenhub",
  storageBucket: "gamer-shavenhub.appspot.com",
  messagingSenderId: "1040443303531",
  appId: "1:1040443303531:web:3ec0e45fbe8cc5613f732e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// apiKey: import.meta.env.VITE_apikey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITEP_messagingSenderId,
//   appId: import.meta.env.VITE_appId