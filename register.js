import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  collection, addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.registerUser = async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const emergency = document.getElementById("emergency").value;

  try {
    // 1️⃣ Create user in Firebase Auth
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // 2️⃣ Save extra details in Firestore
    await addDoc(collection(db, "users"), {
      uid: userCred.user.uid,
      name,
      email,
      phone,
      emergency,
      createdAt: new Date()
    });

    document.getElementById("status").innerText =
      "✅ Registered successfully! Redirecting...";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } catch (error) {
    document.getElementById("status").innerText =
      "❌ " + error.message;
  }
};
