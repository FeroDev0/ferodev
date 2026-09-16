(function() {
  const img = document.getElementById('intro-visual');
  if (!img) return;
  let start = Date.now();
  let mouseX = 0.5, mouseY = 0.5; // normalized (0-1)
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
  });

  function animate() {
    const t = (Date.now() - start) / 1000;
    const floatX = Math.sin(t * 0.6) * 4;
    const floatY = Math.cos(t * 0.6) * 4;

    targetX = (mouseX - 0.4) * 10;
    targetY = (mouseY - 0.4) * 10;

    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    img.style.transform = `translate(${floatX + currentX}px, ${floatY + currentY}px)`;
    requestAnimationFrame(animate);
  }
  animate();
})();
