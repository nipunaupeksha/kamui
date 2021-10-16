import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAUjltHH7mDxbdsOf0suL2_Zft0c_sOaqQ",
  authDomain: "netflix-clone-6a5cc.firebaseapp.com",
  projectId: "netflix-clone-6a5cc",
  storageBucket: "netflix-clone-6a5cc.appspot.com",
  messagingSenderId: "455106166310",
  appId: "1:455106166310:web:4e8dd07d85f66b7c00f0e7",
  measurementId: "G-D1PG36NSHP"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
