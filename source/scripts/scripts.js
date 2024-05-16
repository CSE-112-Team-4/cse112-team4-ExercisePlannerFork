function createNewCardFromTemplate() {
  fetch("card-template.html")
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById("scheduledContainer");
      container.innerHTML += data; // Appends the new card to the existing content
    })
    .catch((error) => console.error("Error loading the card:", error));
}

document.getElementById("fixedAddButton").addEventListener("click", createNewCardFromTemplate);
