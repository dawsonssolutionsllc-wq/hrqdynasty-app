const API_BASE = "http://127.0.0.1:8000"; // or your Render URL

const modeEl = document.getElementById("mode");
const engineStateEl = document.getElementById("engine-state");
const inputEl = document.getElementById("input-text");
const responseEl = document.getElementById("response");
const sendBtn = document.getElementById("send-btn");

async function fetchStatus() {
  try {
    const res = await fetch(`${API_BASE}/status`);
    const data = await res.json();
    engineStateEl.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    engineStateEl.textContent = "STATUS ERROR";
  }
}

async function sendCommand() {
  const text = inputEl.value.trim();
  if (!text) return;

  responseEl.textContent = "RUNNING...";
  try {
    const res = await fetch(`${API_BASE}/engine/multimodal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, mode: "sovereign" })
    });
    const data = await res.json();
    modeEl.textContent = `MODE: ${data.persona?.tone || "UNKNOWN"}`;
    responseEl.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    responseEl.textContent = "ERROR";
  }
}

sendBtn.addEventListener("click", sendCommand);
setInterval(fetchStatus, 5000);
fetchStatus();
