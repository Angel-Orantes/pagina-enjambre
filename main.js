document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = '🌙 Modo Oscuro';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.style.padding = '10px 20px';
  btn.style.backgroundColor = '#222';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.cursor = 'pointer';
  btn.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  btn.style.zIndex = '999';

  document.body.appendChild(btn);

  // Aplicar tema oscuro si ya estaba activado
  if (localStorage.getItem('modoOscuro') === 'true') {
    document.body.classList.add('oscuro');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');

    const activado = document.body.classList.contains('oscuro');
    localStorage.setItem('modoOscuro', activado);
  });
});
