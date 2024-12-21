// Add scroll event listener
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


(function ($) {
    $(function () {
  
      
      $('.js-carousel').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.js-ag-carousel-arrow_prev',
        nextArrow: '.js-ag-carousel-arrow_next',
        responsive: [{
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      });
      
  
    });
  })(jQuery);

 

  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about-us");

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.querySelector(".about-container").classList.add("show");
            observer.unobserve(entry.target); // Stop observing after the animation
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    // Observe the About Us section
    observer.observe(aboutSection);
  });

