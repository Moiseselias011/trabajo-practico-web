const form = document.getElementById('contactForm');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelectorAll('.error').forEach(e => e.textContent = '');

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexTel = /^[0-9+\-\s()]{7,20}$/;

  let ok = true;

  if (!nombre) {
    document.getElementById('error-nombre').textContent = 'El nombre es obligatorio';
    ok = false;
  }
  if (!regexEmail.test(email)) {
    document.getElementById('error-email').textContent = 'Email inválido';
    ok = false;
  }
  if (!regexTel.test(telefono)) {
    document.getElementById('error-telefono').textContent = 'Teléfono inválido';
    ok = false;
  }

  if (!ok) return;

  const div = document.createElement('div');
  div.innerHTML = `<h3>Datos enviados</h3>
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Teléfono: ${telefono}</p>
    <p>Mensaje: ${mensaje || '(sin mensaje)'}</p>`;
  resultado.innerHTML = '';
  resultado.appendChild(div);

  form.reset();
});