
function sortExerciseCards(order) {
  const scheduledContainer = document.getElementById("scheduled-container");
  const completedContainer = document.getElementById("completed-container");

  sortChildrenInContainer(scheduledContainer, order);
  sortChildrenInContainer(completedContainer, order);
}

function sortChildrenInContainer(container, order) {
  const childrenArray = Array.from(container.children).slice(1);

  // Sort the array based on id (creation time)
  childrenArray.sort((a, b) => {
    if (order === "newest") {
      return b.id.localeCompare(a.id);
    } else {
      return a.id.localeCompare(b.id);
    }
  });

  // Clear the container
  while (container.children.length > 1) {
    container.removeChild(container.lastChild);
  }

  // Append the sorted elements back to the container
  childrenArray.forEach(child => container.appendChild(child));
}