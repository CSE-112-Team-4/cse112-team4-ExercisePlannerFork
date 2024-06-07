/**
 * Validate the exercise card fields and display a warning if any values are invalid.
 * @param {ExerciseCard} exerciseCard - The exercise card to validate.
 * @returns {boolean} - Returns true if all values are valid, false otherwise.
 */
function validateExerciseCard(exerciseCard) {
    const exercise = exerciseCard.exercise;
    const calories = exerciseCard.calories;
    const duration = exerciseCard.duration;
    const time = exerciseCard.time;
    const notes = exerciseCard.notes;
  
    let isValid = true;
    let warningMessage = '';
  
    if (!calories || isNaN(calories) || calories <= 0) {
      isValid = false;
      warningMessage += 'Calories must be a positive number.\n';
    }
  
    if (!duration || isNaN(duration) || duration <= 0) {
      isValid = false;
      warningMessage += 'Duration must be a positive number.\n';
    }
  
    // Validate time (simple validation for non-empty value)
    if (!time) {
      isValid = false;
      warningMessage += 'Time must be specified.\n';
    }
  
    // Validate notes (optional but can have specific rules if needed)
    if (notes && notes.length > 200) {
      isValid = false;
      warningMessage += 'Notes must be less than 200 characters.\n';
    }
  
    // Show warning if any values are invalid
    if (!isValid) {
      alert(`Invalid input:\n${warningMessage}`);
    }
  
    return isValid;
  }