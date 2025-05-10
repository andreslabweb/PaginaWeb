// Efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animación de resaltado en los botones al hacer clic
document.querySelectorAll('button, .enlaces a, .add-payment-method').forEach(button => {
  button.addEventListener('click', function () {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
  });
});

// Efecto de parpadeo en el encabezado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header h1');
  if (header) {
    header.classList.add('flash');
    setTimeout(() => header.classList.remove('flash'), 2000);
  }
});

// Animación de entrada para las imágenes
document.querySelectorAll('.imagenes img').forEach(image => {
  image.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.3s ease';
  });
  image.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
});

// Animación de aparición para las secciones al desplazarse
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});