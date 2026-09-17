document.addEventListener('DOMContentLoaded', function () {
  const assetLinks = document.querySelectorAll('.asset-link');
  const modal = document.getElementById('asset-popup-modal');
  const modalTitle = document.getElementById('asset-modal-title');
  const unityBtn = document.getElementById('asset-unity-btn');
  const githubBtn = document.getElementById('asset-github-btn');

  if (!modal) return;

  function openModal(assetTitle, unityUrl, githubUrl) {
    if (assetTitle && modalTitle) {
      modalTitle.textContent = 'Open ' + assetTitle;
    }

    if (unityBtn) {
      unityBtn.href = unityUrl || '#0';
    }

    if (githubBtn) {
      githubBtn.href = githubUrl || '#0';
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }

  assetLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const unityUrl = this.getAttribute('data-unity-url');
      const githubUrl = this.getAttribute('data-github-url');
      const assetTitle = this.getAttribute('data-asset-title');

      openModal(assetTitle, unityUrl, githubUrl);
    });
  });

  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('info-close') || e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});