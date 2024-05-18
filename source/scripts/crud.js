/**
 * Create a new exercise card and append it to the schedule container.
 */
function createNewExerciseCard() {
  const scheduleContainer = document.getElementById("scheduledContainer");
  const newExerciseCard = document.createElement("exercise-card");
  scheduleContainer.appendChild(newExerciseCard);
}

/**
 * Save the data from the exercise card associated with the clicked save button.
 * @param {Event} event - The event triggered by a click action.
 */
function saveExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  const exerciseCardData = exerciseCard.cardData();
  let existingData = JSON.parse(localStorage.getItem("exerciseCardData")) || [];
  let foundIndex = findCardIndexInExistingData(exerciseCard, existingData);
  if (foundIndex != -1) {
    let foundCard = existingData[foundIndex];
    updateExerciseCard(exerciseCard, foundCard);
  } else {
    existingData.push(exerciseCardData);
  }
  localStorage.setItem("exerciseCardData", JSON.stringify(existingData));
}

/**
 * Update an existing exercise card with new data.
 * @param {HTMLElement} newCard - The new exercise card element.
 * @param {Object} oldCard - The existing card data to be updated.
 */
function updateExerciseCard(newCard, oldCard) {
  oldCard.calories = newCard.calories;
  oldCard.duration = newCard.duration;
  oldCard.time = newCard.time;
  oldCard.notes = newCard.notes;
}

/**
 * Delete the exercise card associated with the clicked delete button.
 * @param {Event} event - The event triggered by a click action.
 */
function deleteExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");
  if (exerciseCard) {
    let existingData =
      JSON.parse(localStorage.getItem("exerciseCardData")) || [];
    let cardIndex = findCardIndexInExistingData(exerciseCard, existingData);
    console.log(cardIndex);
    if (cardIndex !== -1) {
      existingData.splice(cardIndex, 1); // Remove the card from existingData
      localStorage.setItem("exerciseCardData", JSON.stringify(existingData)); // Save updated data to localStorage
    }
    exerciseCard.remove(); // Remove the card element from the DOM
  }
}

/**
 * Find the index of the given exercise card in the existing data.
 * @param {HTMLElement} exerciseCard - The exercise card element to find.
 * @param {Array} existingData - The array of existing card data.
 * @returns {number} - The index of the found card data or -1 if not found.
 */
function findCardIndexInExistingData(exerciseCard, existingData) {
  return existingData.findIndex((cardData) => {
    return cardData.id === exerciseCard.id;
  });
}
