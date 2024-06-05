/**
 * Wait for the DOM to fully load before executing the init function.
 */
window.addEventListener("DOMContentLoaded", init);

/**
 * Initialize the application by setting up event listeners and repopulating cards if data exists.
 */
function init() {
  // localStorage.clear();
  attachButtonListener();
  loadInitialCards();
}

/**
 * Attach event listeners for the add button and card action buttons.
 */
function attachButtonListener() {
  document
    .getElementById("fixed-add-button")
    .addEventListener("click", createNewExerciseCard);

  /**
   * Attach event listeners to the schedule container for save, delete, and discard actions.
   * @param {Event} event - The event triggered by a click action.
   */
  const mainContainer = document.getElementById("main-container");
  mainContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("save-button")) {
      saveExerciseCard(event);
    } else if (event.target.classList.contains("delete-button")) {
      deleteExerciseCard(event);
    } else if (event.target.classList.contains("discard-button")) {
      discardExerciseCard(event);
    }
  });
}

/**
 * Load cards from local storage
 */
function loadInitialCards() {
  let existingData = getLocalCardData();
  if (existingData != []) {
    populateCardsFromLocal(existingData);
  }
}
  
/**
 * Add the exercise card to the completed container
 * @param {ExerciseCard} exerciseCard - Card to be added
 */
function addCardToCompletedContainer(exerciseCard) {
  const completedContainer = document.getElementById("completed-container");
  completedContainer.appendChild(exerciseCard);
}
  
/**
 * Add the exercise card to the scheduled container
 * @param {ExerciseCard} exerciseCard - Card to be added
 */
function addCardToScheduledContainer(exerciseCard) {
  const scheduledContainer = document.getElementById("scheduled-container");
  scheduledContainer.appendChild(exerciseCard);
}
