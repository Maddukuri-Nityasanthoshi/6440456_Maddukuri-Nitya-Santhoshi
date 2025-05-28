// JS Essentials
console.log("Hello! You're now on the Community Portal.");

// Page Load Alert
window.onload = () => {
  alert("The webpage has loaded!");
};

// Handle Form Registration
function handleRegistration(e) {
  e.preventDefault();
  const confirmation = document.getElementById("confirmation");
  if (confirmation) confirmation.textContent = "You have successfully registered!";
}

// Phone Number Validation
function checkPhoneNumber() {
  const phoneInput = document.getElementById("phone").value;
  const phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phoneInput)) {
    alert("Please enter a valid 10-digit phone number.");
  }
}

// Dropdown Selection and Preference Storage
function updateEventSelection() {
  const selected = document.getElementById("eventType").value;
  if (selected) alert(`Event type chosen: ${selected}`);
  localStorage.setItem("storedEvent", selected);
}

// Character Counter
function displayCharCount() {
  const textarea = document.querySelector("textarea");
  const counter = document.getElementById("charCount");
  const length = textarea.value.length;
  counter.textContent = `${length} characters`;
  console.log(`You have typed ${length} characters.`);
}

// Video Playback Status
function notifyVideoReady() {
  const videoStatus = document.getElementById("videoMsg");
  if (videoStatus) videoStatus.textContent = "The video is ready to be played!";
}

// Get User Location
function locateNearbyEvents() {
  const output = document.getElementById("locationOutput");

  if (!navigator.geolocation) {
    alert("Your browser does not support geolocation.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    },
    err => {
      output.textContent = `Location error: ${err.message}`;
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

// Load Saved Preferences on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  const savedType = localStorage.getItem("storedEvent");
  if (savedType) {
    const dropdown = document.getElementById("eventType");
    if (dropdown) dropdown.value = savedType;
  }
});

// Reset Preferences
function resetPreferences() {
  localStorage.clear();
  sessionStorage.clear();
  alert("All saved preferences have been cleared.");
}
