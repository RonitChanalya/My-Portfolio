// Cursor trail setup
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Initial positions and dynamic sizing
circles.forEach((circle, index) => {
  circle.x = 0;
  circle.y = 0;

  // Shrink size toward tail
  const scale = 1 - index * 0.07;
  const size = 18 * scale;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach((circle, index) => {
    const nextCircle = circles[index + 1] || circles[0];

    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;

    circle.style.left = `${x - circle.offsetWidth / 2}px`;
    circle.style.top = `${y - circle.offsetHeight / 2}px`;

    circle.x = x;
    circle.y = y;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
