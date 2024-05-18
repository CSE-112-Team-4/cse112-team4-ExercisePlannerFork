/**
 * Wait for the DOM to fully load before executing the init function.
 */
window.addEventListener("DOMContentLoaded", init);

/**
 * Initialize the application by setting up event listeners and repopulating cards if data exists.
 */
function init() {
  localStorage.clear();
  attachButtonListener();
  let existingData = loadCardData();
  console.log(existingData);
  if (existingData != []) {
    repopulateCards(existingData);
  }
}

/**
 * Attach event listeners for the add button and card action buttons.
 */
function attachButtonListener() {
  document
    .getElementById("fixedAddButton")
    .addEventListener("click", createNewExerciseCard);

  /**
   * Attach event listeners to the schedule container for delete and save actions.
   * @param {Event} event - The event triggered by a click action.
   */
  const scheduleContainer = document.getElementById("mainContainer");
  scheduleContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      deleteExerciseCard(event);
    }
    if (event.target.classList.contains("save-button")) {
      saveExerciseCard(event);
    }
  });
}
