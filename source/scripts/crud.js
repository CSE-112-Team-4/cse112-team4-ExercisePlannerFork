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

function saveExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");

  // Retrieve existing data from local storage
  let existingData = loadCardData();

  // Append the new item to the existing data
  existingData.push(exerciseCard.cardData);

  // Save the updated data back to local storage
  localStorage.setItem("exerciseCardData", JSON.stringify(existingData));
  console.log("Card data saved to local storage:", existingData);
}