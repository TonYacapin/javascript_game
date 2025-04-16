let score = 0;
const scoreDisplay = document.getElementById("score");
const circle = document.getElementById("circle");

circle.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveCircle();
});

function moveCircle() {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  circle.style.left = `${randomX}px`;
  circle.style.top = `${randomY}px`;
}