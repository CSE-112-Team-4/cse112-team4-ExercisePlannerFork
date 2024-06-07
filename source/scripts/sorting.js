/**
 * Sort exercise cards based on the provided sort order.
 * @param {string} sortOrder - The order to sort the exercise cards ('newest' or 'oldest').
 */
function sortExerciseCards(event,sortOrder) {
  event.preventDefault();
  const container = document.getElementById("main-container");
  let cardsArray = Array.from(container.querySelectorAll("exercise-card"));

  if (sortOrder === "newest") {
    cardsArray.sort((a, b) => b.id.localeCompare(a.id));
  } else if (sortOrder === "oldest") {
    cardsArray.sort((a, b) => a.id.localeCompare(b.id));
  }

  cardsArray.forEach((card) => container.appendChild(card));

  // Save the sorted order to local storage
  saveSortedCardsToLocal(cardsArray);
  location.reload();
}

/**
 * Save the sorted exercise cards to local storage.
 * @param {Array} sortedCards - The sorted array of exercise cards.
 */
function saveSortedCardsToLocal(sortedCards) {
  let sortedData = sortedCards.map(card => card.cardData());
  localStorage.setItem("exerciseCardData", JSON.stringify(sortedData));
}