document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// Example of smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const featuresContainer = document.querySelector(".features-container");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

let currentIndex = 0;

const showFeature = (index) => {
  const featureWidth = document.querySelector(".feature").clientWidth;
  featuresContainer.style.transform = `translateX(-${featureWidth * index}px)`;
};

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showFeature(currentIndex);
  }
});

nextButton.addEventListener("click", () => {
  const totalFeatures = document.querySelectorAll(".feature").length;
  if (currentIndex < totalFeatures - 1) {
    currentIndex++;
    showFeature(currentIndex);
  }
});




// code for siding window for the slider
new Swiper('.testimonial-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  breakpoints: {
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 2,
      },
  }
});
