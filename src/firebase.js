import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQDKPprgoTnYKRv0dUsjBqQBUX9juQZVc",
  authDomain: "demo1-55b1e.firebaseapp.com",
  projectId: "demo1-55b1e",
  storageBucket: "demo1-55b1e.appspot.com",
  messagingSenderId: "628921320910",
  appId: "1:628921320910:web:2117dfca58cd469e44979f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
