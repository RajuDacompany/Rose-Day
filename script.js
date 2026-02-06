let rainStarted = false;

// 🎶 PLAY ROMANTIC SONG (Channa Ve)
function playMusic() {
  const yt = document.getElementById("ytMusic");

  // Channa Ve – Bhoot (YouTube autoplay + loop)
  yt.src =
    "https://www.youtube.com/embed/2xvKQ9K8D5Y?autoplay=1&loop=1&playlist=2xvKQ9K8D5Y";

  document.getElementById("musicBox").classList.remove("hidden");
}

// SHOW SURPRISE (ONE CLICK ONLY)
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  document.querySelector("button").style.display = "none";

  if (!rainStarted) {
    rainStarted = true;
    typeText();
    startRain();
  }
}

// ✍️ TYPING EFFECT
const text = "I’m so lucky to have you 💖🌹\nWill you always stay with me?";
let i = 0;

function typeText() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  if (i < text.length) {
    typingEl.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, 80);
  }
}

// 🌧️🌹 HEAVY HEART + ROSE RAIN
function startRain() {
  setInterval(() => {
    for (let j = 0; j < 6; j++) {
      const emoji = document.createElement("div");
      emoji.className = "emoji";
      emoji.innerHTML = Math.random() > 0.4 ? "🌹" : "❤️";

      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.fontSize = Math.random() * 25 + 20 + "px";
      emoji.style.animationDuration =
        Math.random() * 2 + 2 + "s";

      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 5000);
    }
  }, 150);
}

// 💫 FALLING ANIMATION STYLE
const style = document.createElement("style");
style.innerHTML = `
.emoji {
  position: fixed;
  top: -60px;
  animation: fall linear forwards;
  pointer-events: none;
  z-index: 0;
}

@keyframes fall {
  to {
    transform: translateY(120vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
