/**
 * Create a new exercise card and append it to the schedule container.
 */
function createNewExerciseCard() {
  this.disabled = true;

  // Toggle visibility of the exercise type buttons
  const cardioButton = document.getElementById("cardio-button");
  const strengthButton = document.getElementById("strength-button");
  cardioButton.style.animation = "scale-in 0.3s forwards";
  strengthButton.style.animation = "scale-in 0.3s forwards";

  const scheduleContainer = document.getElementById("scheduled-container");
  const newExerciseCard = document.createElement("exercise-card");

  // Function to hide buttons and re-enable the add button
  function hideButtons() {
    cardioButton.style.animation = "scale-out 0.3s forwards";
    strengthButton.style.animation = "scale-out 0.3s forwards";
    document.getElementById("fixed-add-button").disabled = false;
    document.removeEventListener("click", handleClickOutside, true);
  }

  // Handle click outside of buttons
  function handleClickOutside(event) {
    if (!cardioButton.contains(event.target) && !strengthButton.contains(event.target) && !event.target.closest("#fixed-add-button")) {
      hideButtons();
    }
  }

  // Listen for clicks outside
  document.addEventListener("click", handleClickOutside, true);

  // Create buttons for Cardio and Strength
  cardioButton.addEventListener("click", function () {
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
    newExerciseCard.exerciseType = ExerciseType.Strength;
    newExerciseCard.addEventListener("template-loaded", function () {
      newExerciseCard.populateExercises(StrengthExercise);
    });
    scheduleContainer.appendChild(newExerciseCard);
    cardioButton.style.animation = "scale-out 0.3s forwards";
    strengthButton.style.animation = "scale-out 0.3s forwards";
    document.getElementById("fixed-add-button").disabled = false;
  });

  const toggleScheduled = document.getElementById("toggle-scheduled");
  const scheduledContainer = document.getElementById("scheduled-container");
  const toggleCompleted = document.getElementById("toggle-completed");
  const completedContainer = document.getElementById("completed-container");

  scheduledContainer.style.display = "grid";
  completedContainer.style.display = "none";

  toggleScheduled.style.fontWeight = "bold";
  toggleCompleted.style.fontWeight = "normal";

  toggleScheduled.style.fontSize = "1.5em";
  toggleCompleted.style.fontSize = "1em";
}
  
/**
 * Save the data from the exercise card associated with the clicked save button.
 * @param {Event} event - The event triggered by a click action.
 */
function saveExerciseCard(event) {
  const exerciseCard = event.target.closest("exercise-card");

  // save card info to local storage only if each field is valid value
  if (validateExerciseCard(exerciseCard)) {
    saveExerciseCardToLocal(exerciseCard);
  }
}

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
