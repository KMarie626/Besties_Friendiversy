const bubbleLayer = document.getElementById("home-bubbles");

for (let i = 0; i < 50; i++) {
  const bubble = document.createElement("span");

  bubble.className = "sparkly-bubble";

  const size = 25 + Math.random() * 55;
  const duration = 14 + Math.random() * 14;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;

  bubble.style.setProperty(
    "--drift",
    `${Math.random() * 100 - 50}px`
  );

  bubble.style.animationDuration = `${duration}s`;
  bubble.style.animationDelay = `${-Math.random() * duration}s`;

  bubbleLayer.appendChild(bubble);
}