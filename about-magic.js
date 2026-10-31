const magicLayer = document.getElementById("about-magic");

const colors = ["#f04fa5", "#b56ce2", "#d98bc9", "#e6b84d"];

for (let i = 0; i < 300; i++) {
  const decoration = document.createElement("span");
  const isHeart = i < 40;

  decoration.className = isHeart ? "magic-heart" : "magic-sparkle";
  decoration.textContent = isHeart ? "♥" : "✦";

  decoration.style.left = `${Math.random() * 100}%`;
  decoration.style.top = `${Math.random() * 100}%`;
  decoration.style.fontSize = `${12 + Math.random() * 20}px`;
  decoration.style.color = colors[i % colors.length];

  const duration = isHeart
    ? 8 + Math.random() * 8
    : 3 + Math.random() * 3;

  decoration.style.animationDuration = `${duration}s`;
  decoration.style.animationDelay = `${-Math.random() * duration}s`;

  magicLayer.appendChild(decoration);
}