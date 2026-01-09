import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnDBbzMdmHKs8O4EI9A19onsm6gukP2fA",
    authDomain: "ai-guard-95488.firebaseapp.com",
    projectId: "ai-guard-95488",
    storageBucket: "ai-guard-95488.firebasestorage.app",
    messagingSenderId: "451529768742",
    appId: "1:451529768742:web:cdd37a315effa9e5918be7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
