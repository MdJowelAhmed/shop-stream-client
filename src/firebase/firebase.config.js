// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3X3CF8iXZXubiB1JXoLK6nchoBMCh63o",
  authDomain: "shop-stream-client.firebaseapp.com",
  projectId: "shop-stream-client",
  storageBucket: "shop-stream-client.appspot.com",
  messagingSenderId: "1000020416212",
  appId: "1:1000020416212:web:429cbbbe6d7f60f9fb8d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app