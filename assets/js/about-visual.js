(function() {
  const canvas = document.getElementById("about-visual");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  const shapes = [];
  const numShapes = 20;
  let mouseX = 0.5, mouseY = 0.5;

  function resize() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener("resize", resize);
  resize();

  // Shape generator
  function createShape() {
    const size = 20 + Math.random() * 50;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      angle: Math.random() * Math.PI * 2,
      rotation: (Math.random() - 0.5) * 0.002,
      alpha: 0.15 + Math.random() * 0.15,
      type: Math.random() > 0.5 ? "circle" : "rect"
    };
  }

  for (let i = 0; i < numShapes; i++) shapes.push(createShape());

  // Cursor influence
  window.addEventListener("mousemove", e => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
  });

function drawShape(s, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha; // use computed alpha
  ctx.translate(s.x, s.y);
  ctx.rotate(s.angle);
  ctx.fillStyle = "#7c7c7cff";
  if (s.type === "circle") {
    ctx.beginPath();
    ctx.arc(0, 0, s.size, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillRect(-s.size/2, -s.size/2, s.size, s.size);
  }
  ctx.restore();
}


function animate() {
  ctx.clearRect(0, 0, width, height);

  for (const s of shapes) {
    // update position with subtle cursor effect
    s.x += s.speedX + (mouseX - 0.5) * 0.2;
    s.y += s.speedY + (mouseY - 0.5) * 0.2;
    s.angle += s.rotation;

    // wrap around edges
    if (s.x < -50) s.x = width + 50;
    if (s.x > width + 50) s.x = -50;
    if (s.y < -50) s.y = height + 50;
    if (s.y > height + 50) s.y = -50;

    // calculate alpha fade near left side (0-150px)
    const fadeWidth = 150; // pixels from left
    const leftFade = Math.min(s.x / fadeWidth, 1); // 0 at very left, 1 at fadeWidth
    const alpha = s.alpha * leftFade; // fade effect

    drawShape(s, alpha);
  }
  requestAnimationFrame(animate);
}

  animate();
})();
