// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged,
         updateProfile 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, 
         collection, 
         addDoc, 
         getDocs, 
         query, 
         orderBy, 
         limit,
         doc,
         getDoc,
         setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, 
         ref, 
         uploadBytesResumable, 
         getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Your web app's Firebase configuration
// (Using the config you provided)
const firebaseConfig = {
  apiKey: "AIzaSyBDP7ycccpWt94PJ8XFpqI_I-jgQSd5cLE",
  authDomain: "tic-tac-toe-c9937.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-c9937-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-c9937",
  storageBucket: "tic-tac-toe-c9937.firebasestorage.app",
  messagingSenderId: "628513885027",
  appId: "1:628513885027:web:cdf231c3c9d3cdd1426156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Export specific auth functions for convenience
export { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    updateProfile 
};

// Export specific firestore functions
export { 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    orderBy, 
    limit,
    doc,
    getDoc,
    setDoc
};

// Export specific storage functions
export { 
    ref, 
    uploadBytesResumable, 
    getDownloadURL 
};
