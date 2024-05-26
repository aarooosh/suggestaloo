import {initializeApp} from 'firebase/app'
import {
    getFirestore, 
    collection,
    getDocs
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkW0tccD1IR8gf2NK8OmBpCkOD2TEVdxY",
    authDomain: "suggestaloo.firebaseapp.com",
    projectId: "suggestaloo",
    storageBucket: "suggestaloo.appspot.com",
    messagingSenderId: "277005301674",
    appId: "1:277005301674:web:692d1cd64fb44850f6ddd3",
    measurementId: "G-SBTKVQXEW5"
  };

initializeApp(firebaseConfig)
const db = getFirestore()
const colRef = collection(db, 'data')
getDocs(colRef)
  .then((snapshot) => {
    let data = []
    snapshot.docs.forEach((doc) => {
        data.push({...doc.data(),id : doc.id})
    })
  })
  .catch(err =>{
    console.error(err)
  })