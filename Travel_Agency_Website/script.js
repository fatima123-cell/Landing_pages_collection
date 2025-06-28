 const menuToggle = document.getElementById('menuToggle');
  const fullMenu = document.getElementById('fullMenu');

  menuToggle.addEventListener('click', () => {
    fullMenu.classList.toggle('show');
    menuToggle.classList.toggle('menu-open');
  });
 
 
 
 const dots = document.querySelectorAll(".dot");
  const sections = document.querySelectorAll(".snap-section");

  // Scroll to section on dot click
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = dot.getAttribute("data-index");
      sections[index].scrollIntoView({ behavior: "smooth" });
    });
  });

  // Update active dot on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dots.forEach(dot => dot.classList.remove("active"));
          const index = Array.from(sections).indexOf(entry.target);
          dots[index].classList.add("active");
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(section => observer.observe(section));

