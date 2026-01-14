window.registerUser = function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const emergency = document.getElementById("emergency").value;

  const user = {
    name: name,
    phone: phone,
    emergency: emergency,
    createdAt: new Date().toISOString()
  };

  // Save to LocalStorage (Simulated Backend)
  localStorage.setItem("ai_guard_user", JSON.stringify(user));

  document.getElementById("status").innerText =
    "✅ Registered successfully (Saved locally)";

  // Optional: redirect to dashboard
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
};

