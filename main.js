// =========================================
// 1. CONFIGURATION
// =========================================

const config = {
  phone: "8208379366",
  whatsapp: "918208379366",
  address: "1301, UK Residency, Kandivali East, Lokhandwala, Mumbai",
  email: "hello@presentbiomechanics.com",
};

// =========================================
// 2. POPULATE WEBSITE DATA
// =========================================

const displayAddress = document.getElementById("display-address");
const displayPhone = document.getElementById("display-phone");
const footerAddress = document.getElementById("footer-address");
const footerPhone = document.getElementById("footer-phone");
const year = document.getElementById("year");

if (displayAddress) {
  displayAddress.innerText = config.address;
}

if (displayPhone) {
  displayPhone.innerText = "+91 " + config.phone;
}

if (footerAddress) {
  footerAddress.innerText = config.address;
}

if (footerPhone) {
  footerPhone.innerText = "Ph: +91 " + config.phone;
}

if (year) {
  year.innerText = new Date().getFullYear();
}

// =========================================
// 3. PHONE / WHATSAPP LINKS
// =========================================

const btnCall = document.getElementById("btn-call");
const mobileCall = document.getElementById("mobile-call");
const floatWa = document.getElementById("float-wa");
const mobileWa = document.getElementById("mobile-wa");

if (btnCall) {
  btnCall.href = "tel:+91" + config.phone;
}

if (mobileCall) {
  mobileCall.href = "tel:+91" + config.phone;
}

if (floatWa) {
  floatWa.href = "https://wa.me/" + config.whatsapp;
}

if (mobileWa) {
  mobileWa.href = "https://wa.me/" + config.whatsapp;
}

// =========================================
// 4. MOBILE NAVIGATION
// =========================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

const servicesDropdown = document.querySelector(".nav-dropdown");
const servicesToggle = document.querySelector(".nav-dropdown-toggle");

/*
  Close mobile menu completely
*/
function closeMobileMenu() {
  if (hamburger) {
    hamburger.classList.remove("active");
  }

  if (navLinks) {
    navLinks.classList.remove("active");
  }

  if (servicesDropdown) {
    servicesDropdown.classList.remove("active");
  }
}

/*
  Hamburger open / close
*/
if (hamburger && navLinks) {
  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

    /*
      When hamburger closes,
      also close Services dropdown.
    */
    if (!navLinks.classList.contains("active")) {
      if (servicesDropdown) {
        servicesDropdown.classList.remove("active");
      }
    }
  });
}

// =========================================
// 5. SERVICES DROPDOWN
// =========================================

if (servicesDropdown && servicesToggle) {
  servicesToggle.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    /*
      Only toggle dropdown.
      Do NOT close the mobile menu.
    */
    servicesDropdown.classList.toggle("active");
  });

  /*
    Prevent clicking inside dropdown
    from triggering unwanted parent behaviour.
  */
  const dropdownMenu = servicesDropdown.querySelector(".nav-dropdown-menu");

  if (dropdownMenu) {
    dropdownMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
}

// =========================================
// 6. NAVIGATION LINKS
// =========================================

if (navLinks) {
  const allNavLinks = navLinks.querySelectorAll("a");

  allNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      /*
        If it's the Services toggle,
        don't close the menu.
      */
      if (
        this.classList.contains("nav-dropdown-toggle") ||
        this.closest(".nav-dropdown")
      ) {
        /*
          If this is an actual service page link,
          close menu after clicking it.
        */
        if (
          !this.classList.contains("nav-dropdown-toggle") &&
          this.getAttribute("href") &&
          this.getAttribute("href") !== "#"
        ) {
          setTimeout(function () {
            closeMobileMenu();
          }, 100);
        }

        return;
      }

      /*
        Normal menu item clicked
      */
      closeMobileMenu();
    });
  });
}

// =========================================
// 7. STICKY HEADER & SCROLL EFFECT
// =========================================

const header = document.getElementById("header");
const processProgress = document.getElementById("process-progress");

window.addEventListener("scroll", function () {
  /*
    Header
  */
  if (header) {
    if (window.scrollY > 50) {
      header.style.padding = "0.5rem 0";
      header.style.background = "rgba(5, 5, 5, 0.98)";
    } else {
      header.style.padding = "1rem 0";
      header.style.background = "rgba(5, 5, 5, 0.95)";
    }
  }

  /*
    Process animation
  */
  const processContainer = document.getElementById("process-container");

  if (!processContainer || !processProgress) {
    return;
  }

  const rect = processContainer.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  if (rect.top < viewHeight * 0.8 && rect.bottom > 0) {
    if (window.innerWidth > 768) {
      processProgress.style.width = "100%";
    } else {
      processProgress.style.height = "100%";
    }
  }
});

// =========================================
// 8. SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(function (el) {
    revealOnScroll.observe(el);
  });
}

// =========================================
// 9. BOOKING FORM
// =========================================

const form = document.getElementById("bookingForm");
const formSuccess = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector("button");

    if (!btn) {
      return;
    }

    const originalText = btn.innerText;

    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(function () {
      if (formSuccess) {
        form.style.display = "none";
        formSuccess.style.display = "block";
      }

      form.reset();

      btn.innerText = originalText;
      btn.disabled = false;

      if (formSuccess) {
        formSuccess.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 1000);
  });
}

// =========================================
// 10. SMOOTH SCROLLING
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    /*
        Empty hash
      */
    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    /*
        Only prevent default if
        target actually exists.
      */
    if (targetElement) {
      e.preventDefault();

      const headerElement = document.getElementById("header");

      const headerHeight = headerElement ? headerElement.offsetHeight : 0;

      const elementPosition = targetElement.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,

        behavior: "smooth",
      });

      /*
          Update URL only for valid
          same-page sections.
        */
      history.pushState(null, null, targetId);
    }
  });
});

// =========================================
// 11. CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", function (e) {
  if (!navLinks || !hamburger) {
    return;
  }

  /*
    If mobile menu is open and user
    clicks outside it, close it.
  */
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMobileMenu();
  }
});
