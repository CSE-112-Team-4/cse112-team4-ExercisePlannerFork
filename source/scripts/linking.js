// Function to create a new card from template
function createNewCard() {
    // Get the card template
    var template = document.querySelector('#cardTemplate');

    // Clone the template content
    var card = template.content.cloneNode(true);

    // Add the card to the scheduled container
    var container = document.getElementById('insertPoint');
    container.appendChild(card);
  }

  // Add event listener to the fixedAddButton
  var addButton = document.getElementById('fixedAddButton');
  addButton.addEventListener('click', createNewCard);