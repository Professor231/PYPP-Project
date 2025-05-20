document.addEventListener("DOMContentLoaded", function () {
  let savedSignInData = null;

  const attendanceForm = document.getElementById("attendanceForm");

  // Handle the Sign In Save button
  document
    .getElementById("saveSignInBtn")
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

  // Handle the Sign Out (Form Submit)
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

//Update form

// Helper function to format camelCase to readable labels
function formatLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // insert space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // capitalize the first letter
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("updateForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    // Collect form inputs into an object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Console Output with formatted labels
    console.log("---- PYPP Monthly Update Submission ----");
    for (const key in data) {
      const label = formatLabel(key);
      console.log(`${label}: ${data[key]}`);
    }
    console.log("----------------------------------------");

    // Alert confirmation
    alert("Your monthly update has been successfully submitted!");
  });
});

// function formatLabel(key) {
//   return key
//     .replace(/([a-z])([A-Z])/g, "$1 $2") // add space before capital letters
//     .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("updateForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const data = {};

//     // Collect all form data
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });

//     // Console Output
//     console.log("---- PYPP Monthly Update Submission ----");
//     for (const key in data) {
//       console.log(`${key}: ${data[key]}`);
//     }
//     console.log("----------------------------------------");

//     // Alert confirmation
//     alert("Your monthly update has been successfully submitted!");

//     // Optional: Display formatted data on the page

//     console.log("---- PYPP Monthly Update Submission ----");
//     console.log("PYP Name:", pypName);
//     console.log("Update Period:", updatePeriod);
//     console.log("Entity:", entity);
//     console.log("Department:", department);
//     console.log("Supervisor Name:", supervisorName);
//     console.log("Mentor Name:", mentorName);
//     console.log("Key Assignments/Duties:", assignments);
//     console.log("Significant Duty Changes:", dutyChanges);
//     console.log("Contribution to Host Entity:", contribution);
//     console.log("Most Notable Experience:", notableExperience);
//     console.log("Mentor Relationship:", mentorRelationship);
//     console.log("Supervisor Relationship:", supervisorRelationship);
//     console.log("Colleague Relationship:", colleagueRelationship);
//     console.log("What Worked:", worked);
//     console.log("What Didn’t Work:", notWorked);
//     console.log("How Challenges Will Be Addressed:", addressChallenges);
//     console.log("Requested Support from Mentor/Supervisor:", support);
//     console.log("Additional Training Needed:", training);
//     console.log("Salary Received:", salaryReceived);
//     console.log("If No, Why:", noSalaryReason);
//     console.log("PYP’s Signature:", signature);
//     console.log("Date Signed:", signedDate);
//     console.log("----------------------------------------");
//   });
// });
