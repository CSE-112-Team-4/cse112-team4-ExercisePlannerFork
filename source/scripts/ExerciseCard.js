class ExerciseCard extends HTMLElement {
  constructor() {
    super();
    this.data = {};
  }

  connectedCallback() {
    this.render();
  }

  render() {
    fetch("card-template.html")
      .then((response) => response.text())
      .then((data) => {
        this.innerHTML = data;
      })
      .catch((error) =>
        console.error("Error loading the card template:", error)
      );
  }

  get calories() {
    return this.querySelector("#calories").value;
  }

  set calories(value) {
    this.querySelector("#calories").value = value;
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

  cardData() {
    this.data = {
      calories: this.calories,
      duration: this.duration,
      time: this.time,
      notes: this.notes,
    };
    return this.data;
  }
}

// Define the custom element and register it with the browser
customElements.define("exercise-card", ExerciseCard);
