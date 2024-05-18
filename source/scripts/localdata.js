function loadCardData() {
  // Retrieve data from local storage
  const storedData = localStorage.getItem("exerciseCardData");
  console.log(storedData);
  // If data exists, parse it from JSON and return
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    // If no data exists, return an empty array or any default value
    return [];
  }
}

function repopulateCards(savedData) {
  // Loop through the saved data and create/populate cards
  savedData.forEach((cardData) => {
    const newExerciseCard = document.createElement("exercise-card");
    newExerciseCard.addEventListener('template-loaded', function() {
      newExerciseCard.calories = cardData.calories;
      newExerciseCard.duration = cardData.duration;
      newExerciseCard.time = cardData.time;
      newExerciseCard.notes = cardData.notes;
    });

    // Append the populated card to the container
    const scheduleContainer = document.getElementById("scheduledContainer");
    scheduleContainer.appendChild(newExerciseCard);
  });
}
