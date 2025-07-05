 document.addEventListener("DOMContentLoaded", () => {
    const animateText = (element, delayOffset = 0, callback) => {
      const text = element.textContent;
      element.innerHTML = "";
      element.style.visibility = "visible"; 

      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        if (char !== " ") {
          span.style.animationDelay = `${i * 0.05}s`;
        } else {
          span.classList.add("space");
        }
        element.appendChild(span);
      });

      const totalDelay = text.length * 0.05 + 0.5; 
      if (callback) {
        setTimeout(callback, totalDelay * 1000);
      }
    };

    const h5 = document.getElementById("subHeading");
    const h2 = document.getElementById("mainHeading");
    const p = document.getElementById("paragraph");

    animateText(h5, 0, () => {
      animateText(h2, 0, () => {
        animateText(p);
      });
    });
  });

  /*********************************************/



  (function() {
    const slides = document.querySelectorAll('#testimonial-slider .slide');
    const prevBtn = document.querySelector('#testimonial-slider .prev');
    const nextBtn = document.querySelector('#testimonial-slider .next');
    let current = 0;
    const showSlide = idx => {
      slides[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
    };

    prevBtn.addEventListener('click', () => showSlide(current - 1));
    nextBtn.addEventListener('click', () => showSlide(current + 1));

    
    setInterval(() => showSlide(current + 1), 5000);
  })();