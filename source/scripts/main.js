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
  /*
  const sortDropdown = document.getElementById("sort-dropdown");
  sortDropdown.addEventListener("change", (event) => {
    const sortOrder = event.target.value;
    sortExerciseCards(sortOrder);
  });
  */
}

function loadInitialCards() {
  let existingData = getLocalCardData();
  if (existingData.length > 0) {
    populateCardsFromLocal(existingData);
  }
}

function addCardToCompletedContainer(exerciseCard) {
  const completedContainer = document.getElementById("completed-container");
  completedContainer.appendChild(exerciseCard);
}

function addCardToScheduledContainer(exerciseCard) {
  const scheduledContainer = document.getElementById("scheduled-container");
  scheduledContainer.appendChild(exerciseCard);
}

/**
 * Sort exercise cards based on the provided sort order.
 * @param {string} sortOrder - The order to sort the exercise cards ('newest' or 'oldest').
 */
function sortExerciseCards(event,sortOrder) {
  event.preventDefault();
  const container = document.getElementById("scheduled-container");
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
