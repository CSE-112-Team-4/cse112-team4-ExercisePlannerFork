/*
function sortExerciseCards(order,event) {
  const scheduledContainer = document.getElementById("scheduled-container");
  const completedContainer = document.getElementById("completed-container");

  sortChildrenInContainer(scheduledContainer, order,event);
  //sortChildrenInContainer(completedContainer, order);
}

function sortChildrenInContainer(container, order,event) {
  event.preventdefault();
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

  childrenArray.forEach(child => {
    container.appendChild(child);
    child.render();

    // Listen for the "template-loaded" event before rendering
    child.addEventListener("template-loaded", () => {
      const data = child.cardData();
      updateExerciseCardContent(child, data);
    });

    // Render the child
    // child.render();
  });
}
*/