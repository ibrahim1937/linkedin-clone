import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs , serverTimestamp, addDoc, onSnapshot, query, orderBy} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword , updateProfile, onAuthStateChanged, signOut} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCIEK6bsM1s9lNzE-_5bmTszLd59Emnn1g",
    authDomain: "linkedin-clone-cd85c.firebaseapp.com",
    projectId: "linkedin-clone-cd85c",
    storageBucket: "linkedin-clone-cd85c.appspot.com",
    messagingSenderId: "1062569765414",
    appId: "1:1062569765414:web:d51d364f33b4db088fd4e7",
    measurementId: "G-Z0JNVVDJCV"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

// Posts Collection Reference
const postColRef = collection(db, "posts");

// Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

export { db, auth, collection, serverTimestamp, getDocs, postColRef, addDoc, onSnapshot, query, orderBy, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut
,signInWithEmailAndPassword};