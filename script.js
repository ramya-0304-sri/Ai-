import { db } from "./firebase.js";
import { collection, addDoc } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.registerUser = async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const emergency = document.getElementById("emergency").value;

  await addDoc(collection(db, "users"), {
    name: name,
    phone: phone,
    emergency: emergency,
    createdAt: new Date()
  });

  document.getElementById("status").innerText =
    "✅ Registered successfully (Saved in Firebase)";
};
