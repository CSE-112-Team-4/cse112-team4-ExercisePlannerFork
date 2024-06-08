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

function loadInitialCards() {
  let existingData = getLocalCardData();
  if (existingData != []) {
    populateCardsFromLocal(existingData);
  }
}

function addCardToCompletedContainer(exerciseCard) {
  const completedContainer = document.getElementById("completed-container");
  completedContainer.appendChild(exerciseCard);
}

function addCardToScheduledContainer(exerciseCard) {
  const scheduledContainer = document.getElementById("scheduled-container");
  scheduledContainer.appendChild(exerciseCard);
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleScheduled = document.getElementById("toggle-scheduled");
  const scheduledContainer = document.getElementById("scheduled-container");
  const toggleCompleted = document.getElementById("toggle-completed");
  const completedContainer = document.getElementById("completed-container");

  toggleScheduled.addEventListener("click", function () {
    scheduledContainer.style.display = "grid";
    completedContainer.style.display = "none";

    toggleScheduled.style.fontWeight = "bold";
    toggleCompleted.style.fontWeight = "normal";

    toggleScheduled.style.fontSize = "1.5em";
    toggleCompleted.style.fontSize = "1em";
  });

  toggleCompleted.addEventListener("click", function () {
    completedContainer.style.display = "grid";
    scheduledContainer.style.display = "none";

    toggleCompleted.style.fontWeight = "bold";
    toggleScheduled.style.fontWeight = "normal";

    toggleCompleted.style.fontSize = "1.5em";
    toggleScheduled.style.fontSize = "1em";
  });
});
