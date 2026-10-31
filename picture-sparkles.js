const sparkleLayer = document.getElementById("picture-sparkles");

const sparkleColors = ["#d56bb0", "#ad78d4", "#d5a637"];

for (let i = 0; i < 1000; i++) {
  const sparkle = document.createElement("span");

  sparkle.textContent = i % 2 === 0 ? "✦" : "✧";

  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.fontSize = `${12 + Math.random() * 16}px`;
  sparkle.style.color = sparkleColors[i % sparkleColors.length];

  const duration = 5 + Math.random() * 5;

  sparkle.style.animationDuration = `${duration}s`;
  sparkle.style.animationDelay = `${-Math.random() * duration}s`;

  sparkleLayer.appendChild(sparkle);
}