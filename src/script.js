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
  });
});

//handles the thank you page

function formatLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("updateForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log("---- PYPP Monthly Update Submission ----");
    for (const key in data) {
      console.log(`${formatLabel(key)}: ${data[key]}`);
    }
    console.log("----------------------------------------");

    // Redirect to Thank You page
    window.location.href = "thankyou.html";
  });
});

//for the login

// Predefined users (in base64 format for simple obfuscation)
const users = {
  // "james.gaygay@pypp.org": "cGFzc3dvcmQxMjM=", // password123
  // "alice.doe@pypp.org": "bXlTZWN1cmVQYXNz", // mySecurePass

  pyp2024_20: "cHlwY3hpaV8yMA==", // pypcxii_20
  pyp2024_21: "cHlwY3hpaV8yMQ==", // pypcxii_21
  pyp2024_22: "cHlwY3hpaV8yMg==", // pypcxii_22
};

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const loginBox = document.getElementById("loginBox");
  const formPage = document.getElementById("formPage");

  if (isLoggedIn) {
    formPage.style.display = "block";
  } else {
    loginBox.style.display = "block";
  }
});

// Simple Base64 encoder
function encode(str) {
  return btoa(str);
}

// Login function
function login() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const encoded = encode(password);

  if (users[email] && users[email] === encoded) {
    sessionStorage.setItem("isLoggedIn", "true");
    location.reload();
  } else {
    document.getElementById("loginError").textContent =
      "Invalid email or password.";
  }
}

// Logout function
function logout() {
  sessionStorage.clear();
  location.reload();
}
