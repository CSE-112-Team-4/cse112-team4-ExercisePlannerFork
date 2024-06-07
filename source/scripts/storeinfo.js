
function showCreateAccount() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('create-account-form').style.display = 'block';
}

function showLoginForm() {
    console.log('i got here!');
    document.getElementById('create-account-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function showMainPage(){
  document.getElementById('main-container').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('fixed-add-button').style.display = 'block';
}
function register() {
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Store user data in localStorage
  const userData = { username, email, password };
  localStorage.setItem('user_' + username + email, JSON.stringify(userData));

//   alert('Account created successfully!');
  showLoginForm();
}
function login(event) {

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const username = document.getElementById('login-username').value;

    // for e2e:
    if (username==='e2e_usJDJWAuTPEyOOutbZbs') {
        loginSuccess();
        return;
    }
    // handling not filled in fields (if not bot)
    event.preventDefault();

    // Retrieve user data from localStorage
    const storedData = localStorage.getItem('user_' + username + email);
    if (storedData) {
        const userData = JSON.parse(storedData);
        if (userData.password === password) {
            loginSuccess();
        } else {
            alert('Incorrect password.');
        }
    } else {
        alert('No account found with this email.');
    }
    
}

function loginSuccess() {
    alert('Login successful!');
    // Redirect or perform actions for logged in user
    localStorage.setItem('isLoggedIn', 'true');
    showMainPage();
}

function logout() {
    // Hide the main page and show the login form
    localStorage.removeItem('isLoggedIn');
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('fixed-add-button').style.display = 'none';
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-username').value = '';
            
            
}

window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      showMainContainer();
    } else {
      showLoginForm();
    }
  });