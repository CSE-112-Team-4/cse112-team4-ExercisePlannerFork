/**
 * Load card data from local storage.
 * @returns {Array} - The array of existing card data.
 */
function loadCardDataFromLocal() {
  // Retrieve data from local storage
  const existingData = localStorage.getItem("exerciseCardData");
  // If data exists, parse it from JSON and return
  if (existingData) {
    return JSON.parse(existingData);
  } else {
    // If no data exists, return an empty array or any default value
    return [];
  }
}

/**
 * Save the exercise card data to local storage.
 * @param {HTMLElement} exerciseCard - The exercise card element to save.
 */
function saveExerciseCardToLocal(exerciseCard) {
  const exerciseCardData = exerciseCard.cardData();
  let existingData = JSON.parse(localStorage.getItem("exerciseCardData")) || [];
  let cardIndex = findCardIndexInExistingData(exerciseCard, existingData);
  if (cardIndex != -1) {
    let foundCard = existingData[cardIndex];
    updateExerciseCardInLocal(foundCard, exerciseCard);
  } else {
    existingData.push(exerciseCardData);
  }
  localStorage.setItem("exerciseCardData", JSON.stringify(existingData));
}

/**
 * Delete the exercise card data from local storage.
 * @param {HTMLElement} exerciseCard - The exercise card element to delete.
 */
function deleteExerciseCardFromLocal(exerciseCard) {
  let existingData = JSON.parse(localStorage.getItem("exerciseCardData")) || [];
  let cardIndex = findCardIndexInExistingData(exerciseCard, existingData);
  if (cardIndex !== -1) {
    existingData.splice(cardIndex, 1); // Remove the card from existingData
    localStorage.setItem("exerciseCardData", JSON.stringify(existingData)); // Save updated data to localStorage
  }
}

/**
 * Update an exercise card in local storage.
 * @param {Object} cardToUpdate - The card data to be updated.
 * @param {HTMLElement} referenceCard - The exercise card providing new data.
 */
function updateExerciseCardInLocal(cardToUpdate, referenceCard) {
  cardToUpdate.calories = referenceCard.calories;
  cardToUpdate.duration = referenceCard.duration;
  cardToUpdate.time = referenceCard.time;
  cardToUpdate.notes = referenceCard.notes;
}

/**
 * Discard changes to an exercise card and revert to saved data from local storage.
 * @param {HTMLElement} exerciseCard - The exercise card element to discard changes for.
 */
function discardExerciseCardInLocal(exerciseCard) {
  let existingData = JSON.parse(localStorage.getItem("exerciseCardData")) || [];
  let cardIndex = findCardIndexInExistingData(exerciseCard, existingData);
  if (cardIndex !== -1) {
    let foundCard = existingData[cardIndex];
    updateExerciseCardInLocal(exerciseCard, foundCard);
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

/**
 * Repopulate the exercise cards from local storage data.
 * @param {Array} existingData - The array of existing card data.
 */
function repopulateCardsFromLocal(existingData) {
  // Loop through the saved data and create/populate cards
  existingData.forEach((cardData) => {
    const newExerciseCard = document.createElement("exercise-card");

    // Set the card's ID to match the ID stored in cardData
    newExerciseCard.id = cardData.id;

    newExerciseCard.addEventListener("template-loaded", function () {
      newExerciseCard.calories = cardData.calories;
      newExerciseCard.duration = cardData.duration;
      newExerciseCard.time = cardData.time;
      newExerciseCard.notes = cardData.notes;
    });

    // Append the populated card to the container
    const scheduleContainer = document.getElementById("scheduledContainer");
    scheduleContainer.appendChild(newExerciseCard);
  });
}