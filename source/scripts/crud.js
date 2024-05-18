/**
 * Create a new exercise card and append it to the schedule container.
 */
function createNewExerciseCard() {
  const scheduleContainer = document.getElementById("scheduledContainer");
  const newExerciseCard = document.createElement("exercise-card");
  scheduleContainer.appendChild(newExerciseCard);
}

/**
 * Delete the exercise card associated with the clicked delete button.
 * @param {Event} event - The event triggered by a click action.
 */
function deleteExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  if (exerciseCard) {
    exerciseCard.remove();
  }
}

/**
 * Save the data from the exercise card associated with the clicked save button.
 * @param {Event} event - The event triggered by a click action.
 */
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

/**
 * Update an existing exercise card with new data.
 * @param {HTMLElement} newCard - The new exercise card element.
 * @param {Object} oldCard - The existing card data to be updated.
 */
function updateExerciseCard(newCard, oldCard) {
  newCard = oldCard;
}

/**
 * Check if the given exercise card exists in the existing data.
 * @param {HTMLElement} exerciseCard - The exercise card element to check.
 * @param {Array} existingData - The array of existing card data.
 * @returns {Object|null} - The found card data or null if not found.
 */
function checkIfCardExists(exerciseCard, existingData) {
  for (const cardData of existingData) {
    console.log(cardData.id);
    if (cardData.id == exerciseCard.id) {
      return cardData;
    }
  }
  return null;
}
