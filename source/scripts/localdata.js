function loadCardData() {
  // Retrieve data from local storage
  const existingData = localStorage.getItem("exerciseCardData");
  // If data exists, parse it from JSON and return
  if (existingData) {
    return JSON.parse(existingData);
  } else {
    // If no data exists, return an empty array or any default value
    return [];
  }
}

function repopulateCards(existingData) {
  // Loop through the saved data and create/populate cards
  existingData.forEach((cardData) => {
    const newExerciseCard = document.createElement("exercise-card");

    // Set the card's ID to match the ID stored in cardData
    newExerciseCard.id = cardData.id;

    newExerciseCard.addEventListener("template-loaded", function () {
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
