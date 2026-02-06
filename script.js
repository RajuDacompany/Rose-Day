let rainStarted = false;

// 🎶 PLAY BACKGROUND MUSIC
function playMusic() {
  const audio = document.getElementById("bgMusic");
  audio.volume = 0.6;
  audio.play().catch(err => console.log(err));
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

// ✍️ TYPING EFFECT TEXT
const text = "I’m so lucky to have you 💖🌹\nWill you always stay with me?";
let i = 0;

function typeText() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  if (i < text.length) {
    typingEl.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, 80);
  } else {
    // Show YES / NO buttons after typing finishes
    document.getElementById("choiceBox").classList.remove("hidden");
  }
}

// 🌧️🌹 NORMAL BACKGROUND RAIN
function startRain() {
  setInterval(() => {
    for (let j = 0; j < 4; j++) {
      const emoji = document.createElement("div");
      emoji.className = "emoji";
      emoji.innerHTML = Math.random() > 0.4 ? "🌹" : "❤️";
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.fontSize = Math.random() * 20 + 20 + "px";
      emoji.style.animationDuration = Math.random() * 3 + 3 + "s";
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 6000);
    }
  }, 300);
}

// ❤️ YES CLICKED → FULL HEART RAIN
function yesAnswer() {
  document.getElementById("choiceBox").style.display = "none";
  document.getElementById("wrongMsg").style.display = "none";

  setInterval(() => {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.className = "emoji";
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 30 + 25 + "px";
      heart.style.animationDuration = Math.random() * 2 + 1 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }
  }, 200);
}

// ❌ NO CLICKED → WRONG INPUT
function noAnswer() {
  document.getElementById("wrongMsg").classList.remove("hidden");
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
