// Wait for window to load
window.addEventListener("DOMContentLoaded", init);

function init() {
  addExerciseListener();
}

function addExerciseListener() {
  document
    .getElementById("fixedAddButton")
    .addEventListener("click", createNewExerciseCard);
}
