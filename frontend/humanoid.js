body {
  margin: 0;
  background: radial-gradient(circle at top, #02040a 0%, #000000 60%);
  font-family: system-ui, sans-serif;
  color: #e0f7ff;
}

.humanoid-container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.humanoid-visual {
  width: 260px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.humanoid-outline {
  width: 180px;
  height: 360px;
  border-radius: 90px;
  border: 2px solid rgba(0, 255, 255, 0.5);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.humanoid-core {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffd700 0%, #ff8c00 40%, transparent 70%);
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.9);
  animation: heartbeat 2.4s infinite;
}

@keyframes heartbeat {
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
}

.humanoid-panel {
  width: 420px;
  background: rgba(5, 15, 25, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 16px 20px;
  backdrop-filter: blur(12px);
}

button {
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(90deg, #00ffff, #ffd700);
  color: #02040a;
  font-weight: 600;
  cursor: pointer;
}

pre {
  background: rgba(0, 0, 0, 0.6);
  padding: 8px;
  border-radius: 8px;
  max-height: 160px;
  overflow: auto;
  font-size: 0.85rem;
}
