
function showCreateAccount() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('create-account-form').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('create-account-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

function showMainPage() {
  document.getElementById('main-container').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('fixed-add-button').style.display = 'flex';
  document.getElementById('fixed-old-button').style.display = 'block';
  document.getElementById('fixed-new-button').style.display = 'block';
  document.getElementById('sort-title').style.display = 'block';
}

function register() {
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const isLoggedIn = 'true'
  // Store user data in localStorage
  const userData = { username, email, password, isLoggedIn };
  localStorage.setItem('user_' + username + email, JSON.stringify(userData));
  showLoginForm();
}

function login(event) {

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const username = document.getElementById('login-username').value;

  // for e2e:
  if (username === 'e2e_usJDJWAuTPEyOOutbZbs') {
    loginSuccess(true);
    return;
  }
  // handling not filled in fields (if not bot)
  event.preventDefault();
  // check if success with retrieve data
  retrieveDataLocalStorage(email, password, username);
}

function retrieveDataLocalStorage(email, password, username) {
  // Retrieve user data from localStorage
  key = 'user_' + username + email;
  const storedData = localStorage.getItem(key);
  if (storedData) {
    const userData = JSON.parse(storedData);
    if (userData.password === password) {
      const autoLoggedIn = (userData.isLoggedIn === 'true')
      userData.isLoggedIn = 'true';
      const updatedUserData = JSON.stringify(userData);
      localStorage.setItem(key, updatedUserData);
      loginSuccess(autoLoggedIn);
    } else {
      alert('Incorrect password.');
    }
  } else {
    alert('No account found with this email.');
  }
}

function loginSuccess(autoLoggedIn) {
  if (!autoLoggedIn) {
    alert('Login successful!');
  }
  // Redirect or perform actions for logged in user
  showMainPage();
}

function logout() {
  // Hide the main page and show the login form

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    try {
      const parsedValue = JSON.parse(value);

      // Check if the parsed value is an object and has the desired property
      if (parsedValue && parsedValue.isLoggedIn === "true") {
        parsedValue.isLoggedIn = "false";
        const updatedValue = JSON.stringify(parsedValue);
        // Save the updated JSON string back to localStorage
        localStorage.setItem(key, updatedValue);

      }
    } catch (e) {
      // If JSON.parse fails, it's not a JSON value, so ignore it
      console.warn(`Could not parse value for key "${key}".`, e);
    }
  }

  document.getElementById('main-container').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('fixed-add-button').style.display = 'none';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('login-username').value = '';
  document.getElementById('fixed-old-button').style.display = 'none';
  document.getElementById('fixed-new-button').style.display = 'none';
  document.getElementById('sort-title').style.display = 'none';

}

window.addEventListener('DOMContentLoaded', () => {
  // loop through localstorage, checking if any user has isLoggedIn
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    try {
      const parsedValue = JSON.parse(value);

      // Check if the parsed value is an object and has the desired property
      if (parsedValue && parsedValue.isLoggedIn === "true") {
        retrieveDataLocalStorage(parsedValue.email, parsedValue.password, parsedValue.username)
        return;
      }
    } catch (e) {
      // If JSON.parse fails, it's not a JSON value, so ignore it
      console.warn(`Could not parse value for key "${key}".`, e);
    }
  }

  showLoginForm();

});