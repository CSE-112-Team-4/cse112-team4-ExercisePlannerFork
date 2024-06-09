/**
 * Wait for the DOM to fully load before executing the init function.
 */
window.addEventListener("DOMContentLoaded", init);

/**
 * Initialize the application by setting up event listeners and repopulating cards if data exists.
 */
function init() {
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

  const cardioButton = document.getElementById("cardio-button");
  const strengthButton = document.getElementById("strength-button");
  const scheduleContainer = document.getElementById("scheduled-container");

  // Create buttons for Cardio and Strength
  cardioButton.addEventListener("click", function () {
    const newExerciseCard = document.createElement("exercise-card");
    newExerciseCard.exerciseType = ExerciseType.Cardio;
    newExerciseCard.addEventListener("template-loaded", function () {
      newExerciseCard.populateExercises(CardioExercise);
    });
    scheduleContainer.appendChild(newExerciseCard);
    cardioButton.style.animation = "scale-out 0.3s forwards";
    strengthButton.style.animation = "scale-out 0.3s forwards";
    document.getElementById("fixed-add-button").disabled = false;
  });

  strengthButton.addEventListener("click", function () {
    const newExerciseCard = document.createElement("exercise-card");
    newExerciseCard.exerciseType = ExerciseType.Strength;
    newExerciseCard.addEventListener("template-loaded", function () {
      newExerciseCard.populateExercises(StrengthExercise);
    });
    scheduleContainer.appendChild(newExerciseCard);
    cardioButton.style.animation = "scale-out 0.3s forwards";
    strengthButton.style.animation = "scale-out 0.3s forwards";
    document.getElementById("fixed-add-button").disabled = false;
  });

  /**
   * Attach event listeners to the main container for save, delete, and discard actions.
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
  if (existingData.length > 0) {
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

document.addEventListener("DOMContentLoaded", function () {
  const toggleScheduled = document.getElementById("toggle-scheduled");
  const scheduledContainer = document.getElementById("scheduled-container");
  const toggleCompleted = document.getElementById("toggle-completed");
  const completedContainer = document.getElementById("completed-container");

  if (localStorage.getItem("currentContainer") === "completed") {
    completedContainer.style.display = "grid";
    scheduledContainer.style.display = "none";

    toggleCompleted.style.fontWeight = "bold";
    toggleScheduled.style.fontWeight = "normal";

    toggleCompleted.style.fontSize = "1.5em";
    toggleScheduled.style.fontSize = "1em";

  } else {
    
    scheduledContainer.style.display = "grid";
    completedContainer.style.display = "none";

    toggleScheduled.style.fontWeight = "bold";
    toggleCompleted.style.fontWeight = "normal";

    toggleScheduled.style.fontSize = "1.5em";
    toggleCompleted.style.fontSize = "1em";
  }

  toggleScheduled.addEventListener("click", function () {
    localStorage.setItem("currentContainer", "scheduled");

    scheduledContainer.style.display = "grid";
    completedContainer.style.display = "none";

    toggleScheduled.style.fontWeight = "bold";
    toggleCompleted.style.fontWeight = "normal";

    toggleScheduled.style.fontSize = "1.5em";
    toggleCompleted.style.fontSize = "1em";
  });

  toggleCompleted.addEventListener("click", function () {
    localStorage.setItem("currentContainer", "completed");

    completedContainer.style.display = "grid";
    scheduledContainer.style.display = "none";

    toggleCompleted.style.fontWeight = "bold";
    toggleScheduled.style.fontWeight = "normal";

    toggleCompleted.style.fontSize = "1.5em";
    toggleScheduled.style.fontSize = "1em";
  });
});
