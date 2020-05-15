import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnBoHZRLCW2DPcXrMlP8LLQpgCAz-Q14Y",
    authDomain: "autosave-43891.firebaseapp.com",
    databaseURL: "https://autosave-43891.firebaseio.com",
    projectId: "autosave-43891",
    storageBucket: "autosave-43891.appspot.com",
    messagingSenderId: "1032229035457",
    appId: "1:1032229035457:web:db90c4ac84d0db31526340"
});

const db = firebaseApp.firestore();

// Export the database for components to use.
export { db }
