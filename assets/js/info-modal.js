document.addEventListener("DOMContentLoaded", () => {
  // Open modal
  document.querySelectorAll("[data-modal]").forEach(trigger => {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      const modalId = trigger.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.setAttribute("aria-hidden", "false");
    });
  });

  // Close modal
  document.querySelectorAll(".info-close").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      btn.closest(".info-modal").setAttribute("aria-hidden", "true");
    });
  });

  // Close on outside click
  document.querySelectorAll(".info-modal").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.setAttribute("aria-hidden", "true");
      }
    });
  });
});
