// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Qw49aIIjJj0CQkCrXVQsqOvQvOJkyvM",
  authDomain: "central-park-bootstrap.firebaseapp.com",
  projectId: "central-park-bootstrap",
  storageBucket: "central-park-bootstrap.appspot.com",
  messagingSenderId: "577161667180",
  appId: "1:577161667180:web:448aba05eaf22913576e49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;