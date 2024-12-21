document.getElementById("submitBtn").addEventListener("click", function (event) {
  event.preventDefault(); 


  const videoInput = document.getElementById("video-upload");
  const imageInput = document.getElementById("image-upload");
  const description = document.getElementById("startUpDescription").value;
  const ask = document.getElementById("yourAsk").value;
  const equity = document.getElementById("equityOffer").value;

 
  if (!videoInput.files.length || !imageInput.files.length || !description || !ask || !equity) {
      alert("Please fill in all fields and upload both video and image!");
      return;
  }

  
  const pitchData = {
      videoName: videoInput.files[0].name,
      imageName: imageInput.files[0].name,
      description: description,
      ask: ask,
      equity: equity,
  };


  localStorage.setItem("pitchData", JSON.stringify(pitchData));

  alert("Pitch data has been saved locally!");

  // Optionally, clear the form here if desired
  document.getElementById("pitchForm").reset();
});
