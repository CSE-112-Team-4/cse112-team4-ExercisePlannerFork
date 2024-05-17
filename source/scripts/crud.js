function createNewExerciseCard() {
  const scheduleContainer = document.getElementById("scheduledContainer");
  const newExerciseCard = document.createElement("exercise-card");
  scheduleContainer.appendChild(newExerciseCard);
}

function deleteExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  if (exerciseCard) {
    exerciseCard.remove();
  }
}

function saveExerciseCard() {
  // Retrieve existing data from local storage
  let existingData = localStorage.getItem("exerciseCardData");

  // If no existing data found, initialize it as an empty array
  if (!existingData) {
    existingData = [];
  } else {
    // Parse the existing data from JSON
    existingData = JSON.parse(existingData);
  }

  // Append the new item to the existing data
  existingData.push(cardData);

  // Save the updated data back to local storage
  localStorage.setItem("exerciseCardData", JSON.stringify(existingData));
  console.log("Card data saved to local storage:", existingData);
}

function loadExercise() {}
