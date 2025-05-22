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

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
const getTodayKey = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // YYYY-MM-DD
};

function saveToLocalStorage(entry) {
  const existing = JSON.parse(localStorage.getItem("attendanceData")) || {};
  const todayKey = getTodayKey();

  if (!existing[todayKey]) {
    existing[todayKey] = {};
  }

  existing[todayKey] = { ...existing[todayKey], ...entry };
  localStorage.setItem("attendanceData", JSON.stringify(existing));
  alert("Saved successfully.");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saveSignInBtn").addEventListener("click", () => {
    const name = document.getElementById("signinName").value;
    const entity = document.getElementById("signinEntity").value;
    const department = document.getElementById("signinDepartment").value;

    if (!name || !entity || !department) {
      alert("Please fill all sign-in fields.");
      return;
    }

    saveToLocalStorage({
      signInTime: new Date().toISOString(),
      name,
      entity,
      department,
    });
  });

  renderAttendancePreview(); // 👈 Update preview after sign-in

  document.getElementById("saveSignOutBtn").addEventListener("click", () => {
    const name = document.getElementById("signoutName").value;

    if (!name) {
      alert("Please enter name to sign out.");
      return;
    }

    saveToLocalStorage({
      signOutTime: new Date().toISOString(),
    });
  });

  renderAttendancePreview(); // 👈 Update preview after sign-out

  document.getElementById("submitMonthlyBtn").addEventListener("click", () => {
    const isApproved = sessionStorage.getItem("supervisorApproved");

    if (isApproved !== "true") {
      alert("❌ Supervisor approval required before final submission.");
      return;
    }

    const monthlyData =
      JSON.parse(localStorage.getItem("attendanceData")) || {};

    if (Object.keys(monthlyData).length === 0) {
      alert("No attendance data to submit.");
      return;
    }

    console.log("Submitting monthly data:", monthlyData);

    // Simulate submission
    alert("✅ Monthly report submitted successfully!");

    localStorage.removeItem("attendanceData");
    sessionStorage.removeItem("supervisorApproved");
  });
});

//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

//this will handle the preview form
function renderAttendancePreview() {
  const data = JSON.parse(localStorage.getItem("attendanceData")) || {};
  const preview = document.getElementById("attendancePreview");
  preview.innerHTML = "";

  if (Object.keys(data).length === 0) {
    preview.innerHTML = "<p>No attendance records yet.</p>";
    return;
  }

  let html = `<table border="1" cellspacing="0" cellpadding="5">
        <tr>
            <th>Date</th>
            <th>Full Name</th>
            <th>Entity</th>
            <th>Department</th>
            <th>Sign In</th>
            <th>Sign Out</th>
        </tr>`;

  for (const [date, entry] of Object.entries(data)) {
    html += `<tr>
            <td>${date}</td>
            <td>${entry.name || "-"}</td>
            <td>${entry.entity || "-"}</td>
            <td>${entry.department || "-"}</td>
            <td>${
              entry.signInTime
                ? new Date(entry.signInTime).toLocaleTimeString()
                : "-"
            }</td>
            <td>${
              entry.signOutTime
                ? new Date(entry.signOutTime).toLocaleTimeString()
                : "-"
            }</td>
        </tr>`;
  }

  html += `</table>`;
  preview.innerHTML = html;

  //hhhhhhhhhhhhhhhhhhhhhhhhhh
}

//this handles the form data and log it to the console

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("updateForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop default form submission

      const formData = new FormData(form);
      const data = {};

      // Convert form data to plain object
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Log form data to the browser console
      console.log("Form submission data:", data);

      // Notify the user
      alert("Your monthly update has been successfully submitted!");

      // Clear session and redirect to login page
      sessionStorage.clear();
      // window.location.href = "login.html";
    });
  } else {
    console.warn('Form with ID "updateForm" not found on this page.');
  }
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
    // window.location.href = "thankyou.html";
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

  document.addEventListener("DOMContentLoaded", () => {
    renderAttendancePreview(); // 👈 Shows data right away
  });
});

// Simple Base64 encoder
function encode(str) {
  return btoa(str);
}

// Login function

function login() {
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = {
    pyp2024_20: "pypcxii_20",
    pyp2024_21: "pypcxii_21",
    supervisor1: "supersafe2024", // You can change this to the actual supervisor login
  };

  const loginError = document.getElementById("loginError");
  const loadingMessage = document.getElementById("loadingMessage");

  if (users[userName] && users[userName] === password) {
    loginError.textContent = "";
    loadingMessage.style.display = "block";

    setTimeout(() => {
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("user", userName);

      // Redirect based on user type
      if (userName.startsWith("supervisor")) {
        window.location.href = "verify.html"; // Placeholder supervisor page
      } else {
        window.location.href = "index.html"; // PYP form page
      }
    }, 2000);
  } else {
    loginError.textContent = "Invalid username or password.";
    loadingMessage.style.display = "none";
  }
}
