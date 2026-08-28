document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
       HEADER SCROLL
    ========================================= */

  const header = document.getElementById("siteHeader");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  /* =========================================
       MOBILE MENU
    ========================================= */

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");

  const mobileMenu = document.getElementById("mobileMenu");

  const mobileClose = document.getElementById("mobileClose");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.add("active");

      document.body.style.overflow = "hidden";
    });
  }

  if (mobileClose) {
    mobileClose.addEventListener("click", function () {
      mobileMenu.classList.remove("active");

      document.body.style.overflow = "";
    });
  }

  /* =========================================
       MOBILE SERVICES DROPDOWN
    ========================================= */

  const servicesToggle = document.getElementById("mobileServicesToggle");

  const servicesList = document.getElementById("mobileServicesList");

  if (servicesToggle && servicesList) {
    servicesToggle.addEventListener("click", function () {
      servicesList.classList.toggle("active");
    });
  }

  /* =========================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ========================================= */

  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");

      document.body.style.overflow = "";
    });
  });

  /* =========================================
       YEAR
    ========================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* =========================================
       MEDIA CARD ANIMATION
    ========================================= */

  const cards = document.querySelectorAll(".media-card");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
});
