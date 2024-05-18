// Wait for window to load
window.addEventListener("DOMContentLoaded", init);

function init() {
  
  attachButtonListener();
  let existingData = loadCardData();
  console.log(existingData);
  if (existingData != []) {
    repopulateCards(existingData);
  }
}

function attachButtonListener() {
  document
    .getElementById("fixedAddButton")
    .addEventListener("click", createNewExerciseCard);

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
