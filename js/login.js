const ADM_EMAIL = 'admin@email.com';
const ADM_PASSWORD = '123456';

const errorField = document.getElementById('errors');

function submit() {
  errorField.textContent = "";

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email !== ADM_EMAIL && password !== ADM_PASSWORD) {
    alert('Combinação errada :c');

    errorField.textContent = `tente email: ${ADM_EMAIL} e senha: ${ADM_PASSWORD}`;
    return;
  }

  alert('Logado! Parabens')
}