document.addEventListener('DOMContentLoaded', function () {
  // more specific selector for the "Career" button inside the about banner
  const careerBtn = document.querySelector('.about--banner > a');
  const modal = document.getElementById('timeline-modal');
  if (!modal) return; // nothing to do

  const closeBtn = modal.querySelector('.timeline-close');

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    // prevent background scroll
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (careerBtn) {
    careerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // click outside to close
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // ESC to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
});