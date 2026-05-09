
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar');
    }
  });
});
const elementosEscondidos = document.querySelectorAll('.escondido');
elementosEscondidos.forEach((elemento) => {
  observer.observe(elemento);
});
