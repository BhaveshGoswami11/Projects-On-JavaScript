const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const textInput = document.getElementById("textInput");
const logBox = document.getElementById("eventLog");

let loggingEnabled = false;

// Log helper
function addLog(message) {
    if (!loggingEnabled) return;

    // Remove placeholder text
    const placeholder = logBox.querySelector(".placeholder");
    if (placeholder) placeholder.remove();

    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.textContent = message;
    logBox.appendChild(entry);

    // Auto scroll
    logBox.scrollTop = logBox.scrollHeight;
}

// Start Logging
startBtn.addEventListener("click", () => {
    loggingEnabled = true;
    addLog("✅ Event logging started");
});

// Stop Logging
stopBtn.addEventListener("click", () => {
    loggingEnabled = false;
    addLog("⛔ Event logging stopped");
});

// Mouse event
document.addEventListener("mousemove", () => {
    addLog("🖱️ Mouse moved");
});

// Keyboard event
textInput.addEventListener("keyup", (e) => {
    addLog(`⌨️ Key pressed: ${e.key}`);
});

// Click events
startBtn.addEventListener("click", () => addLog("▶ Start button clicked"));
stopBtn.addEventListener("click", () => addLog("■ Stop button clicked"));
