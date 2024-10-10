// app.js
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'password123';
const SESSION_TOKEN = 'authToken';

const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const loginSection = document.getElementById('loginSection');
const taskManagerSection = document.getElementById('taskManagerSection');
const logoutButton = document.getElementById('logoutButton');

// Function to handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;



    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem(SESSION_TOKEN, 'loggedIn');
        showTaskManager();
    } else {
        loginError.classList.remove('hidden');
    }
});

// Function to handle logout
logoutButton.addEventListener('click', () => {
    localStorage.removeItem(SESSION_TOKEN);
    showLogin();
});

// Show Task Manager
function showTaskManager() {
    loginSection.classList.add('hidden');
    taskManagerSection.classList.remove('hidden');
}

// Show Login
function showLogin() {
    loginSection.classList.remove('hidden');
    taskManagerSection.classList.add('hidden');
    loginError.classList.add('hidden');
}

// Check if user is already logged in
if (localStorage.getItem(SESSION_TOKEN)) {
    showTaskManager();
} else {
    showLogin();
}
