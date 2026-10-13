const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const submit = form?.querySelector('button[type="submit"]');
let sending = false;
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  if (sending) return;
  form.elements.service.value = link.dataset.service;
}));
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (sending) return;
  for (const name of ['name', 'message']) {
    const field = form.elements[name];
    field.value = field.value.trim();
    field.setCustomValidity(field.value.length < (name === 'name' ? 2 : 10) ? 'Completa este campo con el mínimo de caracteres indicado.' : '');
  }
  if (!form.reportValidity()) return;
  sending = true;
  submit.disabled = true;
  form.setAttribute('aria-busy', 'true');
  submit.textContent = 'Enviando solicitud…';
  status.textContent = 'Validando la solicitud de demostración…';
  // Deliberately local: no network request, storage, or third-party submission.
  await new Promise(resolve => setTimeout(resolve, 1200));
  form.reset();
  status.textContent = '¡Prueba completada! Tu solicitud se validó correctamente. Este fue un envío simulado: no se enviaron ni guardaron datos y no recibirás una respuesta. Puedes volver a probar el formulario.';
  form.removeAttribute('aria-busy');
  submit.textContent = 'Enviar solicitud ↗';
  submit.disabled = false;
  sending = false;
  status.focus();
});
form?.addEventListener('input', event => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) event.target.setCustomValidity('');
  if (!sending) status.textContent = '';
});

// Small, optional brand movements; respect the visitor's motion preference.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = document.querySelector('.motion-toggle');
motionToggle?.addEventListener('click', () => {
  const paused = motionToggle.getAttribute('aria-pressed') !== 'true';
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.setAttribute('aria-label', paused ? 'Reanudar animación del logo' : 'Pausar animación del logo');
  motionToggle.textContent = paused ? 'Reanudar movimiento ▷' : 'Pausar movimiento Ⅱ';
  document.querySelector('.hero-visual')?.classList.toggle('motion-paused', paused);
});
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const reveals = document.querySelectorAll('.section-heading, .service-card, .principles article, .process-grid article');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(element => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
  motionPreference.addEventListener('change', event => {
    if (event.matches) {
      reveals.forEach(element => element.classList.add('is-visible'));
      observer.disconnect();
    }
  });
}
