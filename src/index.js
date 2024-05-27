// import {initializeApp} from 'firebase/app'
// import {
//     getFirestore, 
//     collection,
//     addDoc
// } from 'firebase/firestore'

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBkW0tccD1IR8gf2NK8OmBpCkOD2TEVdxY",
//     authDomain: "suggestaloo.firebaseapp.com",
//     projectId: "suggestaloo",
//     storageBucket: "suggestaloo.appspot.com",
//     messagingSenderId: "277005301674",
//     appId: "1:277005301674:web:692d1cd64fb44850f6ddd3",
//     measurementId: "G-SBTKVQXEW5"
//   };

// // initializeApp(firebaseConfig)
// // const db = getFirestore()
// // const colRef = collection(db, 'data')
// // getDocs(colRef)
// //   .then((snapshot) => {
// //     let data = []
// //     snapshot.docs.forEach((doc) => {
// //         data.push({...doc.data(),id : doc.id})
// //     })
// //   })
// //   .catch(err =>{
// //     console.error(err)
// //   })

// initializeApp(firebaseConfig);

// // Get a Firestore Lite instance
// const db = getFirestore();

// // Get the form element
// const form = document.getElementById('form-containeR');
// console.log(form);
// // Add submit event listener to the form

//     form.addEventListener('submit', async function(event) {
//     event.preventDefault(); // Prevent default form submission behavior
//     console.log(form);
//     // Get form data
//     // const formData = new FormData(form);
//     // const nameOfSong = formData.get('item-name');
//     // const nameOfCreator = formData.get('creator-name');
//     // const recommendedBy = formData.get('recommended-by');
//     // const type = formData.get('type');
//     // const notes = formData.get('notes');

//     const nameOfSong = form.querySelector('#item-name').value;
//     const nameOfCreator = form.querySelector('#creator-name').value;
//     const recommendedBy = form.querySelector('#recommended-by').value;
//     const type = form.querySelector('#type').value;
//     const notes = form.querySelector('#notes').value;

//     // Create FormData object
//     const formData = new FormData();
//     formData.append('item-name', nameOfSong);
//     formData.append('creator-name', nameOfCreator);
//     formData.append('recommended-by', recommendedBy);
//     formData.append('type', type);
//     formData.append('notes', notes);

//     try {
//         // Add the form data to Firestore database
//         const docRef = await addDoc(collection(db, "recommendations"), {
//         songName: nameOfSong,
//         creatorName: nameOfCreator,
//         recommendedBy: recommendedBy,
//         type : type,
//         notes: notes
//         });
        
//         console.log("Document written with ID: ", docRef.id);
//         // Clear the form after submission
//         form.reset();
//     } catch (error) {
//         console.error("Error adding document: ", error);
//     }
//     })
// ;

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyBkW0tccD1IR8gf2NK8OmBpCkOD2TEVdxY",
        authDomain: "suggestaloo.firebaseapp.com",
        projectId: "suggestaloo",
        storageBucket: "suggestaloo.appspot.com",
        messagingSenderId: "277005301674",
        appId: "1:277005301674:web:692d1cd64fb44850f6ddd3",
        measurementId: "G-SBTKVQXEW5"
      };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

// Add submit event listener to the form
const form = document.getElementById('form-containeR');
form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Extract form field values
    const nameOfSong = form.querySelector('#item-name').value;
    const nameOfCreator = form.querySelector('#creator-name').value;
    const recommendedBy = form.querySelector('#recommended-by').value;
    const type = form.querySelector('#type').value;
    const notes = form.querySelector('#notes').value;

    try {
        // Add the form data to Firestore database
        const docRef = await addDoc(collection(db, "recommendations"), {
            songName: nameOfSong,
            creatorName: nameOfCreator,
            recommendedBy: recommendedBy,
            type: type,
            notes: notes
        });

        console.log("Document written with ID: ", docRef.id);
        // Clear the form after submission
        window.location.href = 'thank-you.html';
        form.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
    }
});
