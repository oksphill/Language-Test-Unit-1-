/**
 * Language Tests Units 1 to 8 - Main Application Bootstrapper
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize UI controller
  UI.init();

  // Close modals on backdrop click or close buttons
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".modal-close-btn, .btn-modal-cancel").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-backdrop");
      if (modal) modal.classList.remove("open");
    });
  });

  // Handle ESC key to dismiss modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.open").forEach((modal) => {
        modal.classList.remove("open");
      });
    }
  });

  console.log("English Language Tests Units 1-8 initialized successfully.");
});
