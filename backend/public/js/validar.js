document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
    let isValid = true;
    const email = document.getElementById('email');
    const cardholder = document.getElementById('cardholder');
    const cardnumber = document.getElementById('cardnumber');
    const expyear = document.getElementById('expyear');
    const cvv = document.getElementById('cvv');
    const amount = document.getElementById('amount');

    // Validar correo electrónico
    if (!validateEmail(email.value)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      isValid = false;
    }

    // Validar nombre del titular
    if (cardholder.value.trim() === '') {
      alert('El nombre del titular de la tarjeta no puede estar vacío.');
      isValid = false;
    }

    // Validar número de tarjeta (16 dígitos)
    if (!/^\d{16}$/.test(cardnumber.value)) {
      alert('El número de tarjeta debe tener exactamente 16 dígitos.');
      isValid = false;
    }

    // Validar año de expiración (debe ser mayor o igual al año actual)
    const currentYear = new Date().getFullYear();
    if (expyear.value < currentYear) {
      alert('El año de expiración debe ser mayor o igual al año actual.');
      isValid = false;
    }

    // Validar CVV (3 dígitos)
    if (!/^\d{3}$/.test(cvv.value)) {
      alert('El código de seguridad (CVV) debe tener exactamente 3 dígitos.');
      isValid = false;
    }

    // Validar monto a pagar (debe ser mayor a 0)
    if (amount.value <= 0) {
      alert('El monto a pagar debe ser mayor a 0.');
      isValid = false;
    }

    // Si alguna validación falla, evita el envío del formulario
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Función para validar correos electrónicos
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});