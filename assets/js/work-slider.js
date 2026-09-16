(function() {
  const work = document.querySelector('.work');
  if (!work) return;
  const parentSection = work.closest('.l-section');
  const images = work.querySelectorAll('.slider--item-image img');

  let mouseX = 0.5, mouseY = 0.5;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
  });

  function animate() {
    if (parentSection.classList.contains('section--is-active')) {
      targetX = (mouseX - 0.5) * 10;
      targetY = (mouseY - 0.5) * 10;
      currentX += (targetX - currentX) * 0.10;
      currentY += (targetY - currentY) * 0.10;
      images.forEach(img => {
        img.style.transform = `scale(1.04) translate(${currentX}px, ${currentY}px)`;
        img.style.transition = 'transform 0.2s';
      });
    } else {
      images.forEach(img => img.style.transform = '');
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
