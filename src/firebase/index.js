import firebase from 'firebase'
import 'firebase/firestore' 

const app = firebase.initializeApp({
    apiKey: "AIzaSyA0W4cyo4-cMZgzvNSvZ6Mzs1Pb8C8-bxE",
    authDomain: "johncena-ecommerce.firebaseapp.com",
    projectId: "johncena-ecommerce",
    storageBucket: "johncena-ecommerce.appspot.com",
    messagingSenderId: "19477882643",
    appId: "1:19477882643:web:c307f2ec45b86515f51ce6",
    measurementId: "G-9L6QB2M6WC"

})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)