/**
 * This script defines a custom HTML element called <exercise-card> that represents
 * an exercise card with its properties.
 * The card can be dynamically created, rendered from a template, and its data can be accessed or modified.
 */

class ExerciseCard extends HTMLElement {
  constructor() {
    super();
    this.data = {};
    this.id = `exercise-card-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    this._exerciseType = null;
    this._exercise = null;
  }

  /**
   * Invoked each time the custom element is appended into a document-connected element.
   * It fetches and renders the card template.
   */
  connectedCallback() {
    this.render();
  }

  render() {
    fetch("card-template.html")
      .then((response) => response.text())
      .then((data) => {
        this.innerHTML = data;
        this.dispatchEvent(new CustomEvent("template-loaded"));
        if (this._exercise) {
          this.querySelector(".exerciseSelection").value = this._exercise;
        }
      })
      .catch((error) =>
        console.error("Error loading the card template:", error),
      );
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get exerciseType() {
    return this._exerciseType;
  }

  set exerciseType(value) {
    this._exerciseType = value;
  }

  get exercise() {
    return this._exercise;
  }

  set exercise(value) {
    this._exercise = value;
    if (this.isConnected) {
      this.querySelector(".exerciseSelection").value = value;
    }
  }

  get calories() {
    return this.querySelector("#calories").value;
  }

  set calories(value) {
    this.querySelector("#calories").value = value;
  }

  get sets() {
    return this.querySelector("#sets").value;
  }

  set sets(value) {
    this.querySelector("#sets").value = value;
  }

  get duration() {
    return this.querySelector("#duration").value;
  }

  set duration(value) {
    this.querySelector("#duration").value = value;
  }

  get time() {
    return this.querySelector(".schedule-edit").value;
  }

  set time(value) {
    this.querySelector(".schedule-edit").value = value;
  }

  get notes() {
    return this.querySelector("#notes").value;
  }

  set notes(value) {
    this.querySelector("#notes").value = value;
  }

  get completed() {
    return this.querySelector("#completed").checked;
  }

  set completed(value) {
    this.querySelector("#completed").checked = value;
  }

  /**
   * Populate the exercise selection dropdown with options.
   * @param {Object} exerciseChoices - An object containing exercise choices.
   */
  populateExercises(exerciseChoices) {
    const dropdown = this.querySelector(".exerciseSelection");

    // Add a placeholder option
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Select an exercise";
    dropdown.appendChild(placeholderOption);

    for (const choice in exerciseChoices) {
      const option = document.createElement("option");
      option.value = exerciseChoices[choice];
      option.textContent = exerciseChoices[choice];
      dropdown.appendChild(option);
    }

    dropdown.value = this._exercise || "";

    // update the exercise when the user selects an option
    dropdown.addEventListener("change", () => {
      this.exercise = dropdown.value;
    });
  }

  /**
   * Get the card data as an object.
   * @returns {Object} - An object containing the card's data.
   */
  cardData() {
    const data = {
      id: this.id,
      exerciseType: this.exerciseType,
      exercise: this.exercise,
      calories: this.calories,
      sets: this.sets,
      duration: this.duration,
      time: this.time,
      notes: this.notes,
      completed: this.completed,
    };
    return data;
  }
}

// Define the custom element and register it with the browser
customElements.define("exercise-card", ExerciseCard);
