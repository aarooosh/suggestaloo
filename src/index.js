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

// initializeApp(firebaseConfig)
// const db = getFirestore()
// const colRef = collection(db, 'data')
// getDocs(colRef)
//   .then((snapshot) => {
//     let data = []
//     snapshot.docs.forEach((doc) => {
//         data.push({...doc.data(),id : doc.id})
//     })
//   })
//   .catch(err =>{
//     console.error(err)
//   })

initializeApp(firebaseConfig);

// Get a Firestore Lite instance
const db = getFirestore();

// Get the form element
const form = document.getElementById('form-container');

// Add submit event listener to the form
document.addEventListener('DOMContentLoaded',function(){
    form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const formData = new FormData(form);
    const nameOfSong = formData.get('item-name');
    const nameOfCreator = formData.get('creator-name');
    const recommendedBy = formData.get('recommended-by');
    const type = formData.get('type');
    const notes = formData.get('notes');

    try {
        // Add the form data to Firestore database
        const docRef = await addDoc(collection(db, "recommendations"), {
        songName: nameOfSong,
        creatorName: nameOfCreator,
        recommendedBy: recommendedBy,
        type : type,
        notes: notes
        });
        
        console.log("Document written with ID: ", docRef.id);
        // Clear the form after submission
        form.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    })
});