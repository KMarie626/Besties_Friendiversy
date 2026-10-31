const starLayer = document.getElementById("shooting-stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("span");

  star.className = "shooting-star";

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 85}%`;
  star.style.width = `${60 + Math.random() * 70}px`;

  const duration = 6 + Math.random() * 6;

  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${-Math.random() * duration}s`;

  starLayer.appendChild(star);
}