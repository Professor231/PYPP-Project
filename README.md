# PYPP-Project
PYPP Digital Time &amp; Update Sheet
# PYPP Digital Time & Update Sheet 🕒📋

A web-based attendance and reporting platform for the **President’s Young Professionals Program (PYPP)** in Liberia. This system allows fellows to **digitally sign in/out when they arrive at work/leave** and **submit monthly update reports**—eliminating the need for physical forms and office visits.

---

## 🔧 Features

- ✅ Digital sign-in with automatic date and time capture
- 🗓️ Monthly activity update form (including tasks, challenges, and feedback)
- 📊 Google Sheets integration as a backend database
- 🌐 Fully responsive web interface built with HTML, CSS, and JavaScript
- 🔒 Lightweight and easily extendable for secure access

---

## 🧰 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Google Sheets via Google Apps Script Webhook

---

## 📦 How It Works

1. **User Interaction:** A PYP accesses the web app and fills in the sign-in or monthly update form.
2. **Submission:** JavaScript sends the form data via a `POST` request to a published Google Apps Script URL.
3. **Data Storage:** The script records the data in a connected Google Sheet in real-time.
4. **Access:** Admins can view or export reports as needed.

---
