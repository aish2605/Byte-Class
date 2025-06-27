import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDYAB_x_Qc_Xrw3RmhYfZQQEPVuhz9LZU",
  authDomain: "byte-class.firebaseapp.com",
  projectId: "byte-class",
  storageBucket: "byte-class.firebasestorage.app",
  messagingSenderId: "798180723454",
  appId: "1:798180723454:web:acb684afaf7a2f5f5bf3af",
  measurementId: "G-V368G9KZRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
