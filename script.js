const modal = document.getElementById('modal');
const sign = document.getElementById('sign');
const login = document.getElementById('login');

const createForm = (type) => `
<form action="action_page.php">
  <div class="container">
    <h1>${type}</h1>
    <p>Please fill in this form to ${type}.</p>
    <hr>
    <label for="${type}-email"><b>Email</b></label>
    <div class="input-container">
      <i class='bx bx-user'></i>
      <input type="text" placeholder="Enter Email" name="email" id="${type}-email" required>
    </div>
    <label for="${type}-psw"><b>Password</b></label>
    <div class="input-container">
      <i class='bx bx-lock'></i>
      <input type="password" placeholder="Enter Password" name="psw" id="${type}-psw" required>
    </div>
    ${type === 'signup' ? `
      <label for="${type}-psw-repeat"><b>Repeat Password</b></label>
      <div class="input-container">
        <i class='bx bx-lock'></i>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="${type}-psw-repeat" required>
      </div>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    ` : ''}
    <button type="submit" class="registerbtn">${type === 'login' ? 'Log In' : 'Register'}</button>
  </div>
</form>
`;

login.addEventListener('click', () => {
  modal.classList.toggle('vis');
  modal.innerHTML = createForm('login');
});

sign.addEventListener('click', () => {
  modal.classList.toggle('vis');
  modal.innerHTML = createForm('signup');
});

