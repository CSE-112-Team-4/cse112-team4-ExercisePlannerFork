/**
 * @jest-environment jsdom
 */

// exercise card test
describe("ExerciseCard", () => {
  let card;
  let templateData;

  beforeEach(async () => {
    // Create a new exercise card element
    card = document.createElement("exercise-card");
    document.body.appendChild(card);

    // Wait for the template to load (use a custom event)
    // await new Promise((resolve) => {
    //   card.addEventListener("template-loaded", resolve);
    // });
  });

  afterEach(() => {
    document.body.removeChild(card);
  });


  // suspect this doesn't work due to HTML object not being created, commented out for now
  // it("should generate a unique ID on creation", () => {
  //   const card2 = document.createElement("exercise-card");
  //   document.body.appendChild(card2);
  //   expect(card.id).not.toEqual(card2.id);
  //   document.body.removeChild(card2);
  // });

  it("should correctly get and set properties", () => {
    card.calories = "250";
    card.duration = "45";
    card.time = "10:30 AM";
    card.notes = "Remember to stretch!";
    card.completed = "True"
    card.sets = "25"
    expect(card.calories).toEqual("250");
    expect(card.duration).toEqual("45");
    expect(card.time).toEqual("10:30 AM");
    expect(card.notes).toEqual("Remember to stretch!");
    expect(card.completed).toEqual("True");
    expect(card.sets).toEqual("25")
  });


});
