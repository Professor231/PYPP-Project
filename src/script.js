// Utility to get current timestamp
function getCurrentTimestamp() {
  const now = new Date();
  return now.toLocaleString(); // You can customize the format later
}

// Handle Sign In submission
document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('signinName').value;
  const dept = document.getElementById('signinDepartment').value;
  const signinTime = getCurrentTimestamp();

  console.log(`Sign In:
    Name: ${name}
    Department: ${dept}
    Time: ${signinTime}`);

  alert('Sign In submitted successfully!');

  // Reset and optionally clear name/department
  this.reset();
});

// Switch to Sign Out form
document.getElementById('goToSignOut').addEventListener('click', function() {
  document.getElementById('signinForm').style.display = 'none';
  document.getElementById('signoutForm').style.display = 'flex';
});

// Handle Sign Out submission
document.getElementById('signoutForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('signoutName').value;
  const signoutTime = getCurrentTimestamp();

  console.log(`Sign Out:
    Name: ${name}
    Time: ${signoutTime}`);

  alert('Sign Out submitted successfully!');
  this.reset();
});
