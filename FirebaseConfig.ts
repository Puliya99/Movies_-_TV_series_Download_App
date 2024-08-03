// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKJZ0rJYJyCDRTM88QhQ4M7Qsrqw-IpM",
  authDomain: "movie-tvseries-app.firebaseapp.com",
  projectId: "movie-tvseries-app",
  storageBucket: "movie-tvseries-app.appspot.com",
  messagingSenderId: "182369719781",
  appId: "1:182369719781:web:ff42cbace422a285710b0c",
  measurementId: "G-8739NRBLPB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

//storage
export const storage=getStorage(app);