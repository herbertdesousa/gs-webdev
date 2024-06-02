const ADM_EMAIL = 'admin@email.com';
const ADM_PASSWORD = '123456';

function submit() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email !== ADM_EMAIL && password !== ADM_PASSWORD) {
    alert(`Combinação errada :c\n tente ${ADM_EMAIL} e ${ADM_PASSWORD}`);
    return;
  }

  window.location.href = "/";
  alert('Logado! Parabens')
}