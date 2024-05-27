import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
        // configure your firebase project in the console and paste the snippet here !
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
