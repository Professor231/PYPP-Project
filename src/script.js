document.addEventListener("DOMContentLoaded", function () {
  let savedSignInData = null; // Temporarily stores sign-in data

  const attendanceForm = document.getElementById("attendanceForm");

  // Handle Sign In Save
  document
    .getElementById("attendanceForm")
    .addEventListener("click", function () {
      const name = document.getElementById("signinName").value.trim();
      const entity = document.getElementById("signinEntity").value.trim();
      const department = document
        .getElementById("signinDepartment")
        .value.trim();

      if (!name || !entity || !department) {
        alert("Please fill in all sign-in fields before saving.");
        return;
      }

      savedSignInData = {
        name,
        entity,
        department,
        signInTime: new Date().toLocaleString(),
      };

      alert("Sign-in data saved. You can now sign out later.");
    });

  // Handle Sign Out Submit
  attendanceForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const signoutName = document.getElementById("signoutName").value.trim();
    const signOutTime = new Date().toLocaleString();

    if (!savedSignInData) {
      alert("Error: No saved sign-in data found.");
      return;
    }

    if (signoutName !== savedSignInData.name) {
      alert("Error: Sign-out name does not match sign-in name.");
      return;
    }

    const fullLog = {
      ...savedSignInData,
      signOutName: signoutName,
      signOutTime,
    };

    console.log("Attendance Record:", fullLog);

    // Reset everything
    savedSignInData = null;
    attendanceForm.reset();
    alert("Sign-out complete. Check console for full log.");
  });
});
