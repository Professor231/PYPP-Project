document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Sign-in submitted successfully!');
  this.reset();
});

document.getElementById('updateForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Monthly update submitted successfully!');
  this.reset();
});
