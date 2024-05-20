// const functions = require('../scripts/exports.js')

// ExerciseCard tests

const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('<!DOCTYPE html><html><body></body></html>')).window;

describe('ExerciseCard', () => {
  let exerciseCard;

  beforeEach(() => {
    exerciseCard = document.createElement('exercise-card');
    document.body.appendChild(exerciseCard); 
  });

  // the tests
});

