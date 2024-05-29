document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Add further form validation and submission logic here

  alert('Registration successful!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Add login form validation and submission logic here

  alert('Login successful!');
  closeLoginModal();
});

function openLoginModal() {
  document.getElementById('loginModal').style.display = "block";
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
