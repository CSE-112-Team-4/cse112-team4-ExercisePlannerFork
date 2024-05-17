// Wait for window to load
window.addEventListener("DOMContentLoaded", init);

function init() {
  addButtonListener();
}

function addButtonListener() {
  document
    .getElementById("fixedAddButton")
    .addEventListener("click", createNewExerciseCard);

  const scheduleContainer = document.getElementById("mainContainer");
  scheduleContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      deleteExerciseCard(event);
    }
  });
}
