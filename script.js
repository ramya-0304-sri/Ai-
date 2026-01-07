function calculateRisk() {
  let time = Math.random() > 0.5 ? "night" : "day";
  let crowd = Math.random() > 0.5 ? "low" : "high";
let movement = "abnormal";


  let riskScore = 0;

  if (time === "night") riskScore += 30;
  if (crowd === "low") riskScore += 30;
  if (movement === "abnormal") riskScore += 40;

  document.getElementById("risk").innerText = riskScore;
  document.getElementById("bar").style.width = riskScore + "%";

  let bar = document.getElementById("bar");
  let status = document.getElementById("status");

  if (riskScore < 30) {
    bar.style.background = "green";
    status.innerText = "Normal";
    status.className = "badge normal";
  }
  else if (riskScore < 80) {
    bar.style.background = "orange";
    status.innerText = "Silent Monitoring ⚠️";
    status.className = "badge silent";
  }
  else {
    bar.style.background = "red";
    status.innerText = "🚨 Alert Sent to Police & Contacts";
    status.className = "badge alert";
  }
}

function pressSOS() {
  document.getElementById("status").innerText =
    "🚨 SOS Activated! Alert Sent";
  document.getElementById("status").className = "badge alert";
  document.getElementById("bar").style.width = "100%";
  document.getElementById("bar").style.background = "red";
}

