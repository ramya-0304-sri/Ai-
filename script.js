let riskScore = 0;

function calculateRisk() {
  riskScore = Math.floor(Math.random() * 100);
  document.getElementById("risk").innerText = riskScore;

  if (riskScore < 30) {
    updateStatus("Normal", "green");
  } else if (riskScore < 80) {
    updateStatus("Silent Monitoring ⚠️", "orange");
  } else {
    updateStatus("🚨 ALERT SENT TO POLICE & CONTACTS", "red");
  }
}

function pressSOS() {
  updateStatus("🚨 SOS ACTIVATED! ALERT SENT", "red");
}

function updateStatus(text, color) {
  let status = document.getElementById("status");
  status.innerText = text;
  status.style.color = color;
}
