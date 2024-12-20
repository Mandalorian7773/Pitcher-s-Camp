// Import Firebase dependencies
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref as dbRef, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to fetch and display pitch details
async function displayPitchDetails() {
  const pitchId = "some_pitch_id"; // Replace with a dynamic ID if needed

  try {
    // Get pitch data from Firebase
    const pitchRef = dbRef(database, `pitches/${pitchId}`);
    const snapshot = await get(pitchRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("video-container").innerHTML = `
        <video controls width="600">
          <source src="${data.videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
      document.getElementById("description").textContent = data.description;
      document.getElementById("ask").textContent = data.ask;
      document.getElementById("equity").textContent = `${data.equity}%`;
    } else {
      alert("No pitch data found!");
    }
  } catch (error) {
    console.error("Error fetching pitch details:", error);
    alert("Failed to load pitch details.");
  }
}

// Call the function on page load
displayPitchDetails();
