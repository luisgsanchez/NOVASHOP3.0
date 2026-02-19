// Importaciones necesarias
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyCBuy97ricWk7_hXnfq6Ru1QY1QuyvHPXU",
  authDomain: "novashop-6bad0.firebaseapp.com",
  projectId: "novashop-6bad0",
  storageBucket: "novashop-6bad0.firebasestorage.app",
  messagingSenderId: "168236212583",
  appId: "1:168236212583:web:5f47d616b655744f014fc2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

//  EXPORTAR FIRESTORE
export const db = getFirestore(app);
