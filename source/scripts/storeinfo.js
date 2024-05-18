
function showCreateAccount() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('create-account-form').style.display = 'block';
            
}

function showLoginForm() {
    document.getElementById('create-account-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function showMainPage(){
  document.getElementById('mainContainer').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
}
function register() {
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Store user data in localStorage
  const userData = { username, email, password };
  localStorage.setItem('user_' + email, JSON.stringify(userData));

  alert('Account created successfully!');
  showLoginForm();
}
function login(event) {
  event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from localStorage
    const storedData = localStorage.getItem('user_' + email);
    if (storedData) {
        const userData = JSON.parse(storedData);
        if (userData.password === password) {
            alert('Login successful!');
            // Redirect or perform actions for logged in user
            showMainPage();
        } else {
            alert('Incorrect password.');
        }
    } else {
        alert('No account found with this email.');
    }
    
}
   