import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getDatabase, ref as dbRef, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration
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
const storage = getStorage(app);
const database = getDatabase(app);

document.getElementById("submitBtn").addEventListener("click", async () => {
  const videoInput = document.getElementById("video-upload");
  const imageInput = document.getElementById("image-upload");
  const description = document.getElementById("startUpDescription").value;
  const ask = document.getElementById("yourAsk").value;
  const equity = document.getElementById("equityOffer").value;

  if (!videoInput.files.length || !description || !ask || !equity || !imageInput.files.length) {
    alert("Please fill in all fields and upload the video and image!");
    return;
  }

  const videoFile = videoInput.files[0];
  const imageFile = imageInput.files[0];
  
  const videoFileName = `pitches/${Date.now()}_${videoFile.name}`;
  const imageFileName = `images/${Date.now()}_${imageFile.name}`;

  const videoRef = storageRef(storage, videoFileName);
  const imageRef = storageRef(storage, imageFileName);

  try {
    const videoSnapshot = await uploadBytes(videoRef, videoFile);
    const imageSnapshot = await uploadBytes(imageRef, imageFile);

    const videoUrl = await getDownloadURL(videoSnapshot.ref);
    const imageUrl = await getDownloadURL(imageSnapshot.ref);

    const pitchData = {
      imageUrl,
      videoUrl,
      description,
      ask,
      equity,
    };

    const newPitchRef = dbRef(database, 'pitches').push();
    await set(newPitchRef, pitchData);

    alert("Pitch uploaded successfully!");
  } catch (error) {
    console.error("Error uploading pitch:", error);
    alert("An error occurred while uploading your pitch.");
  }
});
