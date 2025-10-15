// Part 1: Light/dark mode toggle //

// Get the theme button
const themeBtn = document.getElementById('themeBtn');

// Function to change button text based on the mode
function updateThemeButtonText() {
  themeBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';
}

// Add event listener for light/dark mode toggle
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateThemeButtonText();
});

// Initialize button text
updateThemeButtonText();


// Part 2 //

let count = 0; // Start count at 0

const countDisplay = document.getElementById('countDisplay');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Increase count when button is clicked
increaseBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = `Count: ${count}`;
});

// Reset count when button is clicked
resetBtn.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = `Count: ${count}`;
});


//Part 3: Form validation //

const form = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

// Listen for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  // Get user input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Reset feedback message
  formMessage.textContent = '';
  formMessage.style.color = 'red';

  // Validation checks
  if (!name || !email || !password) {
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    return;
  }

  // Password length validation
  if (password.length < 6) {
    formMessage.textContent = 'Password must be at least 6 characters.';
    return;
  }

  // If all validations pass
  formMessage.textContent = '✅ Form submitted successfully!';
  formMessage.style.color = 'green';
  form.reset(); // Clear form after submission
});

// Clear validation message as user types
form.addEventListener('input', () => {
  formMessage.textContent = '';
});
