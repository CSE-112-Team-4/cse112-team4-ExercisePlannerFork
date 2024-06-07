/**
 * Validate the exercise card fields and display a warning if any values are invalid.
 * @param {ExerciseCard} exerciseCard - The exercise card to validate.
 * @returns {boolean} - Returns true if all values are valid, false otherwise.
 */
function validateExerciseCard(exerciseCard) {
  const exercise = exerciseCard.exercise;
  const calories = exerciseCard.calories;
  const sets = exerciseCard.sets;
  const duration = exerciseCard.duration;
  const time = exerciseCard.time;

  let isValid = true;
  let warningMessage = "";

  if (!exercise || exercise === "Select an exercise") {
    isValid = false;
    warningMessage += "An exercise must be selected.\n";
  }

  if (!calories || isNaN(calories) || calories <= 0) {
    isValid = false;
    warningMessage += "Calories must be a positive number.\n";
  }

  if (!sets || isNaN(sets) || sets < 0) {
    isValid = false;
    warningMessage += "Sets must be a non-negative number.\n";
  }

  if (!duration || isNaN(duration) || duration <= 0) {
    isValid = false;
    warningMessage += "Duration must be a positive number.\n";
  }

  if (!time) {
    isValid = false;
    warningMessage += "Time must be specified.\n";
  }

  if (!isValid) {
    alert(`Invalid input:\n${warningMessage}`);
  }

  return isValid;
}
