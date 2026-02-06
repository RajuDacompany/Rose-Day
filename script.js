let rainStarted = false;
let rainInterval;

// PLAY MUSIC (works on button click)
function playMusic() {
  const audio = document.querySelector("audio");
  if (audio) audio.play();
}

// SHOW SURPRISE (ONLY ONE CLICK NEEDED)
function showSurprise() {
  document.getElementById("surprise").style.display = "block";

  if (!rainStarted) {
    rainStarted = true;
    typeText();
    startRain(); // starts automatically, no more clicks needed
  }
}

// TYPING EFFECT
const text = "I’m so lucky to have you 💖🌹\nWill you always stay with me?";
let i = 0;

function typeText() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  if (i < text.length) {
    typingEl.innerHTML +=
      text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    setTimeout(typeText, 80);
  }
}

// 🌧️🌹 HEAVY HEART + ROSE RAIN
function startRain() {
  rainInterval = setInterval(() => {
    // create MANY emojis per cycle (heavy rain)
    for (let j = 0; j < 6; j++) {
      const emoji = document.createElement("div");
      emoji.classList.add("emoji");

      emoji.innerHTML = Math.random() > 0.4 ? "🌹" : "❤️";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.fontSize = Math.random() * 25 + 20 + "px";
      emoji.style.animationDuration = Math.random() * 2 + 2 + "s"; // faster fall

      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 5000);
    }
  }, 150); // very frequent = HEAVY rain
}

// INJECT CSS FOR FALLING EFFECT
const style = document.createElement("style");
style.innerHTML = `
.emoji {
  position: fixed;
  top: -60px;
  animation: fall linear forwards;
  pointer-events: none;
}

@keyframes fall {
  to {
    transform: translateY(120vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
