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
  let foundCard = checkIfCardExists(exerciseCard, existingData);
  if (foundCard) {
    updateExerciseCard(exerciseCard, foundCard);
    console.log("Card updated");
  } else {
    existingData.push(exerciseCardData);
    localStorage.setItem("exerciseCardData", JSON.stringify(existingData));
  }
}

function updateExerciseCard(newCard, oldCard) {
  newCard = oldCard;
}

function checkIfCardExists(exerciseCard, existingData) {
  console.log(exerciseCard.id);
  console.log(existingData);
  existingData.forEach((cardData) => {
    console.log(cardData.id);
    if (cardData.id == exerciseCard.id) {
      console.log("found matching id");
      return cardData;
    }
  });
  return null;
}
