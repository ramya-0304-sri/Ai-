function calculateRisk(time, crowd, movement) {
    let risk = 0;

    if (time === "night") risk += 30;
    if (crowd === "low") risk += 30;
    if (movement === "abnormal") risk += 40;

    return risk;
}

function checkSystem() {
    const sos = document.getElementById("sos").checked;
    const time = document.getElementById("time").value;
    const crowd = document.getElementById("crowd").value;
    const movement = document.getElementById("movement").value;
    const status = document.getElementById("status");

    if (sos) {
        status.innerText = "🚨 SOS PRESSED: Police & Trusted Contacts Notified";
        status.style.color = "red";
        return;
    }

    const risk = calculateRisk(time, crowd, movement);

    if (risk >= 80) {
        status.innerText = "🚨 HIGH RISK: Automatic Alert Sent";
        status.style.color = "red";
    } else if (risk >= 30) {
        status.innerText = "⚠️ Silent Monitoring Activated";
        status.style.color = "orange";
    } else {
        status.innerText = "✅ Safe Situation";
        status.style.color = "green";
    }
}
