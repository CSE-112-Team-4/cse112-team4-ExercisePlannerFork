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
  const exerciseCardData = exerciseCard.cardData();
  let existingData = JSON.parse(localStorage.getItem("exerciseCardData")) || [];
  existingData.push(exerciseCardData);
  localStorage.setItem("exerciseCardData", JSON.stringify(existingData));
}
