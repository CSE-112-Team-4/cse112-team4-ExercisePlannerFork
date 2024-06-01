/**
 * Create a new exercise card and append it to the schedule container.
 */
function createNewExerciseCard() {
  const scheduledContainer = document.getElementById("scheduled-container");
  const newExerciseCard = document.createElement("exercise-card");
  scheduledContainer.appendChild(newExerciseCard);
}

/**
 * Save the data from the exercise card associated with the clicked save button.
 * @param {Event} event - The event triggered by a click action.
 */
function saveExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  // Save to local storage
  saveExerciseCardToLocal(exerciseCard);
  console.log(exerciseCard);
  if (exerciseCard.completed) {
    addCardToCompletedContainer(exerciseCard);
    location.reload();
  }
}

/**
 * Modify an exercise card with new data based on another card's information.
 * @param {HTMLElement} cardToUpdate - The exercise card element to be modified.
 * @param {Object} referenceCard - The card providing the updated data.
 */
function updateExerciseCard() {}

/**
 * Delete the exercise card associated with the clicked delete button.
 * @param {Event} event - The event triggered by a click action.
 */
function deleteExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  if (exerciseCard) {
    deleteExerciseCardFromLocal(exerciseCard);
    exerciseCard.remove(); // Remove the card element from the DOM
  }
}

/**
 * Discards an exercise card based on the event triggered.
 * If an exercise card is found in the event's target hierarchy, its data is retrieved from local storage
 * and the card's information is updated using the found data.
 * @param {Event} event - The event triggered by a click action.
 */
function discardExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  if (exerciseCard) {
    discardExerciseCardInLocal(exerciseCard);
  }
}
