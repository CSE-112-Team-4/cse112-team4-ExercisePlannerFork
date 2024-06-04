/**
 * Create a new exercise card and append it to the schedule container.
 */
function createNewExerciseCard() {
  this.disabled = true;

  // Toggle visibility of the exercise type buttons
  const cardioButton = document.getElementById("cardioButton");
  const strengthButton = document.getElementById("strengthButton");
  cardioButton.style.animation = "scaleIn 0.3s forwards";
  strengthButton.style.animation = "scaleIn 0.3s forwards";

  const scheduleContainer = document.getElementById("scheduledContainer");
  const newExerciseCard = document.createElement("exercise-card");

  // Create buttons for Cardio and Strength
  cardioButton.addEventListener("click", function () {
    newExerciseCard.exerciseType = ExerciseType.Cardio;
    newExerciseCard.addEventListener("template-loaded", function () {
      newExerciseCard.populateExercises(CardioExercise);
    });
    scheduleContainer.appendChild(newExerciseCard);
    cardioButton.style.animation = "scaleOut 0.3s forwards";
    strengthButton.style.animation = "scaleOut 0.3s forwards";
    document.getElementById("fixedAddButton").disabled = false;
  });

  strengthButton.addEventListener("click", function () {
    newExerciseCard.exerciseType = ExerciseType.Strength;
    newExerciseCard.addEventListener("template-loaded", function () {
      newExerciseCard.populateExercises(StrengthExercise);
    });
    scheduleContainer.appendChild(newExerciseCard);
    cardioButton.style.animation = "scaleOut 0.3s forwards";
    strengthButton.style.animation = "scaleOut 0.3s forwards";
    document.getElementById("fixedAddButton").disabled = false;
  });
}

/**
 * Save the data from the exercise card associated with the clicked save button.
 * @param {Event} event - The event triggered by a click action.
 */
function saveExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  // Save to local storage
  saveExerciseCardToLocal(exerciseCard);
}

/**
 * Modify an exercise card with new data based on another card's information.
 * @param {HTMLElement} cardToUpdate - The exercise card element to be modified.
 * @param {Object} referenceCard - The card providing the updated data.
 */

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
