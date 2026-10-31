const snowLayer = document.getElementById("snowfall");

const snowShapes = ["❄", "❅", "❆"];
const snowColors = ["#ffffff", "#8ec5e5", "#b9a1d8"];

for (let i = 0; i < 200; i++) {
  const snowflake = document.createElement("span");

  snowflake.textContent = snowShapes[i % snowShapes.length];
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.fontSize = `${12 + Math.random() * 20}px`;
  snowflake.style.color = snowColors[i % snowColors.length];

  snowflake.style.setProperty(
    "--drift",
    `${Math.random() * 120 - 60}px`
  );

  const duration = 10 + Math.random() * 14;

  snowflake.style.animationDuration = `${duration}s`;
  snowflake.style.animationDelay = `${-Math.random() * duration}s`;

  snowLayer.appendChild(snowflake);
}