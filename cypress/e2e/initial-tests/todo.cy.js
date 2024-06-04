/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('basic UI tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit('https://example.cypress.io/todo')
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('starts with no scheduled', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('#scheduled-container > h3')      
      .should('contain', 'Scheduled')     // Ensure it contains "Scheduled"
      .should('have.length', 1)          // Ensure there's only one <h3>

  })

  it('starts with no completed', () => {
    cy.get('#completed-container >h3')
      .should('contain', 'Completed')
      .should('have.length', 1)
  })

  
  it('+ button adds exercise card', () => {
    cy.get('#fixed-add-button').click()

    cy.get('#scheduled-container > h3')      
      .get('exercise-card').should('exist')     // Ensure it contains a card
  })
  it('saves information given', () => {
    cy.get('#fixed-add-button').click()

    const textToType = 'This is a test note';
    const caloriesBurned = '100'
    const setsCompleted = '5'
    const duration = '10'
  
    // locate textarea of new exercise card and type into it
    cy.get('textarea[name="notes"]').type(textToType);
    // Verify that the text was typed into the textarea
    cy.get('textarea[name="notes"]').should('have.value', textToType);
    
    // locate calories burned and type into it
    cy.get('input[name="calories"]').type(caloriesBurned);
    // verify it got typed
    cy.get('input[name="calories"]').should('have.value', caloriesBurned);  

    // locate sets completed and type into it 
    cy.get('input[name="sets"]').type(setsCompleted);
    // verify it got typed 
    cy.get('input[name="sets"]').should('have.value', setsCompleted);

    // locate duration and type into it
    cy.get('input[name="duration"]').type(duration);
    // verify it got typed 
    cy.get('input[name="duration"]').should('have.value', duration);

    // hit save
    cy.get('button.save-button').click();

    
    
    // Check localStorage for the expected value
    cy.window().then((window) => {
      // Expected properties to be stored in localStorage
      const expectedData = {
        sets: setsCompleted,
        duration: duration,
        notes: textToType
      };
      let found=false;
      const value = window.localStorage.getItem('exerciseCardData'); // first card always 0
      const parsedJson = JSON.parse(value);
      const parsedCard = parsedJson[0];
      if (parsedCard.sets === expectedData.sets &&
        parsedCard.duration === expectedData.duration &&
        parsedCard.notes === expectedData.notes) 
        {
        found = true;
      }
      // check if we found it
      expect(found).to.be.true;
    });
    cy.reload();
    // after reload, check everything still there
    cy.get('input[name="calories"]').should('have.value', caloriesBurned);  
    cy.get('input[name="sets"]').should('have.value', setsCompleted);
    cy.get('input[name="duration"]').should('have.value', duration);
    // and check if its still in local storage   
    cy.window().then((window) => {
      // Expected properties to be stored in localStorage
      const expectedData = {
        sets: setsCompleted,
        duration: duration,
        notes: textToType
      };
      let found=false;
      const value = window.localStorage.getItem('exerciseCardData'); // first card always 0
      const parsedJson = JSON.parse(value);
      const parsedCard = parsedJson[0];
      if (parsedCard.sets === expectedData.sets &&
        parsedCard.duration === expectedData.duration &&
        parsedCard.notes === expectedData.notes) 
        {
        found = true;
      }
      // check if we found it
      expect(found).to.be.true;
    }); 
  });
});
