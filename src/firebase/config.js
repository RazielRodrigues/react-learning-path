import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmAO0H3YOEiau6C-lskUXEBz05TKH4RH0",
    authDomain: "miniblog-30e1f.firebaseapp.com",
    projectId: "miniblog-30e1f",
    storageBucket: "miniblog-30e1f.appspot.com",
    messagingSenderId: "975230970976",
    appId: "1:975230970976:web:a6556d64ed2f8b4f912705"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };