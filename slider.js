document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const nextBtn = document.querySelector(".hero-slider .next");
  const prevBtn = document.querySelector(".hero-slider .prev");

  let current = 0;
  let sliderInterval = null;
  const intervalTime = 5000;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function startSlider() {
    // 🔥 clave: SIEMPRE limpiar antes
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
  }

  // Flechas
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startSlider();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startSlider();
    });
  }

  // Inicializar
  showSlide(current);
  startSlider();
});
