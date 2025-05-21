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
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyjvBq0hUGnFpEh60VQ9xaDCJNrfWgNsTPd87geVUtg9tPJn6zNIi2phprjQBWPKJE/exec "; // <-- replace with your actual script URL

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    }).then((result) => {
      console.log("Server response:", result);
      alert("Form submitted successfully!");
      window.location.href = "thanks.html"; // optional
    });
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

// function login() {
//   const userName = document.getElementById("userName").value.trim();
//   const password = document.getElementById("password").value.trim();

//   const users = {
//     pyp2024_20: "pypcxii_20",
//     pyp2024_21: "pypcxii_21",
//   };

//   const encodedPassword = btoa(password);

//   if (
//     (users[userName] && users[userName] === password) ||
//     users[userName] === encodedPassword
//   ) {
//     sessionStorage.setItem("isLoggedIn", true);
//     sessionStorage.setItem("user", userName);
//     window.location.href = "index.html"; // 🚀 redirect directly to the form
//   } else {
//     document.getElementById("loginError").textContent =
//       "Invalid username or password.";
//   }
// }

function login() {
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = {
    pyp2024_20: "pypcxii_20",
    pyp2024_21: "pypcxii_21",
  };

  const encodedPassword = btoa(password);

  const loginError = document.getElementById("loginError");
  const loadingMessage = document.getElementById("loadingMessage");

  if (
    (users[userName] && users[userName] === password) ||
    users[userName] === encodedPassword
  ) {
    // Show loading message
    loginError.textContent = "";
    loadingMessage.style.display = "block";

    // Simulate loading delay (2 seconds)
    setTimeout(() => {
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("user", userName);
      window.location.href = "index.html"; // Redirect to form
    }, 2000); // 2000ms = 2 seconds
  } else {
    loginError.textContent = "Invalid username or password.";
    loadingMessage.style.display = "none";
  }
}

// function login() {
//   const email = document.getElementById("email").value.trim().toLowerCase();
//   const password = document.getElementById("password").value;
//   const encoded = encode(password);

//   if (users[email] && users[email] === encoded) {
//     sessionStorage.setItem("isLoggedIn", "true");
//     location.reload();
//   } else {
//     document.getElementById("loginError").textContent =
//       "Invalid email or password.";
//   }
// }

// // Logout function
// function logout() {
//   sessionStorage.clear();
//   location.reload();
// }
