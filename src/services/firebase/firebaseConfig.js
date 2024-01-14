import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWYj5DX31t_oJfBotS51eFevcmgm279o8",
  authDomain: "ecommerce49900-1593d.firebaseapp.com",
  projectId: "ecommerce49900-1593d",
  storageBucket: "ecommerce49900-1593d.appspot.com",
  messagingSenderId: "518437076309",
  appId: "1:518437076309:web:3ffa30f7075be5f46783dc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)