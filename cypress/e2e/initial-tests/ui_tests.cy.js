/// <reference types="cypress" />

// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

function login() {
  cy.get('input[name="login-username"]').type('e2e_usJDJWAuTPEyOOutbZbs');
  cy.get('button#login-button').click();
  // alert gets handled
}
describe('basic UI tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // cy.visit('https://example.cypress.io/todo')
    cy.visit('http://127.0.0.1:5500/index.html')
  })
  it('can register successfully', (done) => {
    // exception handling
    cy.on('uncaught:exception', (err, runnable) => {
      done()
      return false
    })

    // making sure that the required alert gets thrown 
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Login successful!');
   })

    
    const usernameToType = 'username';
    const emailToType = 'user@email.com';
    const passwordToType = 'password';
    cy.get('a#create-account').click();
    cy.get('input[name="register-username"]').type(usernameToType)
    cy.get('input[name="register-email"]').type(emailToType)
    cy.get('input[name="register-password"]').type(passwordToType)

    cy.get('button#create-account-button').click();
    cy.get('input[name="login-username"]').type(usernameToType)
    cy.get('input[name="login-email"]').type(emailToType)
    cy.get('input[name="login-password"]').type(passwordToType)

    cy.get('button#login-button').click();
  })
  
  it("user that DNE can't login", (done) => {
    // exception handling
    cy.on('uncaught:exception', (err, runnable) => {
      done()
      return false
    })

    // making sure that the required alert gets thrown 
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('No account found with this email.');
    })
    const usernameToType = 'username';
    const emailToType = 'user@email.com';
    const passwordToType = 'password';
    cy.get('input[name="login-username"]').type(usernameToType)
    cy.get('input[name="login-email"]').type(emailToType)
    cy.get('input[name="login-password"]').type(passwordToType)
    cy.get('button#login-button').click();
  })

  it('starts with no cards scheduled', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    login();
    cy.get('#scheduled-container').should('have.length', 1)          // Ensure there's only one <h3>

  })

  it('starts with no cards completed', () => {
    login();
    cy.get('#completed-container >h3').should('have.length', 0)
  })

  it('+ button successfully adds card', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()

    cy.get('#scheduled-container')      
      .get('exercise-card').should('exist')     // Ensure it contains a card
  })
  
  it('correctly sorts both ways', () => {
    login();
    const info1 = {
      note: 'This is a test note',
      calorie: '100',
      sets: '5',
      duration: '10'
    }

    const info2 = {
        note: 'This is a test note 2',
        calorie: '69',
        sets: '420',
        duration: '5318008'
    }

    const info3 = {
        note: 'This is a test note 3',
        calorie: '13',
        sets: '33',
        duration: '300'
    }

    const info4 = {
        note: 'This is a test note 4',
        calorie: '4',
        sets: '14',
        duration: '400'
    }
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
    // populate and save
    cy.get('exercise-card').eq(0).find('textarea[name="notes"]').type(info1.note);
    cy.get('exercise-card').eq(0).find('input[name="calories"]').type(info1.calorie);
    cy.get('exercise-card').eq(0).find('input[name="sets"]').type(info1.sets);
    cy.get('exercise-card').eq(0).find('input[name="duration"]').type(info1.duration);
    cy.get('exercise-card').eq(0).find('button.save-button').click();

    cy.get('exercise-card').eq(1).find('textarea[name="notes"]').type(info2.note);
    cy.get('exercise-card').eq(1).find('input[name="calories"]').type(info2.calorie);
    cy.get('exercise-card').eq(1).find('input[name="sets"]').type(info2.sets);
    cy.get('exercise-card').eq(1).find('input[name="duration"]').type(info2.duration);
    cy.get('exercise-card').eq(1).find('button.save-button').click();


    cy.get('button#fixed-new-button').click();
    login();
    cy.get('exercise-card').eq(0).find('textarea[name="notes"]').should('have.value', info2.note);
    cy.get('exercise-card').eq(1).find('textarea[name="notes"]').should('have.value', info1.note);

    cy.get('button#fixed-old-button').click();
    login();
    cy.get('exercise-card').eq(0).find('textarea[name="notes"]').should('have.value', info1.note);
    cy.get('exercise-card').eq(1).find('textarea[name="notes"]').should('have.value', info2.note);
  });

  it('exercise type cardio works', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()  
    cy.get('select.exercise-selection').eq(0).within(() => {
      cy.get('option').eq(1).should('have.value', 'running').and('contain', 'running');
    });

  });

  it('exercise type strength works', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#strength-button').click()  
    cy.get('select.exercise-selection').eq(0).within(() => {
      cy.get('option').eq(1).should('have.value', 'squats').and('contain', 'squats');
    });

  });

  it('reload persistence', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    const textToType = 'This is a test note';
    const caloriesBurned = '100';
    const setsCompleted = '5';
    const duration = '10';
  
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
  
    // locate the dropdown and select the first option
    cy.get('select[name="exercise-selection"]').select('running');
    // verify "running" got selected
    cy.get('select[name="exercise-selection"]').should('have.value', 'running');

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
      expect(value).to.not.be.null;
      expect(value).to.not.be.undefined;
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

  it('loads 10 cards, then deletes all of them', () => {
    let size = 10;// 10
    login();
    let button = cy.get('#fixed-add-button')
    for(let i = 0; i < size; i++){
      button.click()
      cy.get('button#cardio-button').click()

    }; 
    cy.get('#scheduled-container').children('exercise-card').should('have.length', size);
  
    for(let i = 0; i < size; i++){
        cy.get('exercise-card').find('button.delete-button').eq(0).click();
      };
    cy.get('#scheduled-container').children('exercise-card').should('have.length', 0);
  });

  it('populate 2, edit and save 1st, edit and discard 2nd. verify, reload and verify again', () => {
  let button = cy.get('#fixed-add-button')
  login();
  button.click()
  cy.get('button#cardio-button').click()

  button.click()
  cy.get('button#cardio-button').click()

  const info1 = {
      note: 'This is a test note',
      calorie: '100',
      sets: '5',
      duration: '10',
      exercise: 'running'
  }

  const info2 = {
      note: 'This is a test note 2',
      calorie: '69',
      sets: '420',
      duration: '5318008',
      exercise: 'cycling'
  }

  const info3 = {
      note: 'This is a test note 3',
      calorie: '13',
      sets: '33',
      duration: '300',
      exercise: 'swimming'
  }

  const info4 = {
      note: 'This is a test note 4',
      calorie: '4',
      sets: '14',
      duration: '400',
      exercise: 'walking'
  }
  
  // populate 2 card with info 1 and 2 and save
  cy.get('exercise-card').eq(0).find('textarea[name="notes"]').type(info1.note);
  cy.get('exercise-card').eq(0).find('input[name="calories"]').type(info1.calorie);
  cy.get('exercise-card').eq(0).find('input[name="sets"]').type(info1.sets);
  cy.get('exercise-card').eq(0).find('input[name="duration"]').type(info1.duration);
  cy.get('exercise-card').eq(0).find('select[name="exercise-selection"]').select(info1.exercise);
  cy.get('exercise-card').eq(0).find('button.save-button').click();

  cy.get('exercise-card').eq(1).find('textarea[name="notes"]').type(info2.note);
  cy.get('exercise-card').eq(1).find('input[name="calories"]').type(info2.calorie);
  cy.get('exercise-card').eq(1).find('input[name="sets"]').type(info2.sets);
  cy.get('exercise-card').eq(1).find('input[name="duration"]').type(info2.duration);
  cy.get('exercise-card').eq(1).find('select[name="exercise-selection"]').select(info2.exercise);
  cy.get('exercise-card').eq(1).find('button.save-button').click();

  //edit 1st card w/ info 3 and save
  cy.get('exercise-card').eq(0).find('textarea[name="notes"]').clear().type(info3.note);
  cy.get('exercise-card').eq(0).find('input[name="calories"]').clear().type(info3.calorie);
  cy.get('exercise-card').eq(0).find('input[name="sets"]').clear().type(info3.sets);
  cy.get('exercise-card').eq(0).find('input[name="duration"]').clear().type(info3.duration);
  cy.get('exercise-card').eq(0).find('select[name="exercise-selection"]').select(info3.exercise);
  cy.get('exercise-card').eq(0).find('button.save-button').click();

  //edit 2nd w/ info 4  and discard
  cy.get('exercise-card').eq(1).find('textarea[name="notes"]').clear().type(info4.note);
  cy.get('exercise-card').eq(1).find('input[name="calories"]').clear().type(info4.calorie);
  cy.get('exercise-card').eq(1).find('input[name="sets"]').clear().type(info4.sets);
  cy.get('exercise-card').eq(1).find('input[name="duration"]').clear().type(info4.duration);
  cy.get('exercise-card').eq(1).find('select[name="exercise-selection"]').select(info4.exercise);
  cy.get('exercise-card').eq(1).find('button.discard-button').click();

  // verify, first card should have info3
  cy.get('exercise-card').eq(0).find('textarea[name="notes"]').should('have.value', info3.note);
  cy.get('exercise-card').eq(0).find('input[name="calories"]').should('have.value', info3.calorie);
  cy.get('exercise-card').eq(0).find('input[name="sets"]').should('have.value', info3.sets);
  cy.get('exercise-card').eq(0).find('input[name="duration"]').should('have.value', info3.duration);
  cy.get('exercise-card').eq(0).find('select[name="exercise-selection"]').should('have.value', info3.exercise);

  // verify, second card should have info2
  cy.get('exercise-card').eq(1).find('textarea[name="notes"]').should('have.value', info2.note);
  cy.get('exercise-card').eq(1).find('input[name="calories"]').should('have.value', info2.calorie);
  cy.get('exercise-card').eq(1).find('input[name="sets"]').should('have.value', info2.sets);
  cy.get('exercise-card').eq(1).find('input[name="duration"]').should('have.value', info2.duration);
  cy.get('exercise-card').eq(1).find('select[name="exercise-selection"]').should('have.value', info2.exercise);

  // reload and re-verify
  cy.reload();

  cy.get('exercise-card').eq(0).find('textarea[name="notes"]').should('have.value', info3.note);
  cy.get('exercise-card').eq(0).find('input[name="calories"]').should('have.value', info3.calorie);
  cy.get('exercise-card').eq(0).find('input[name="sets"]').should('have.value', info3.sets);
  cy.get('exercise-card').eq(0).find('input[name="duration"]').should('have.value', info3.duration);
  cy.get('exercise-card').eq(0).find('select[name="exercise-selection"]').should('have.value', info3.exercise);

  cy.get('exercise-card').eq(1).find('textarea[name="notes"]').should('have.value', info2.note);
  cy.get('exercise-card').eq(1).find('input[name="calories"]').should('have.value', info2.calorie);
  cy.get('exercise-card').eq(1).find('input[name="sets"]').should('have.value', info2.sets);
  cy.get('exercise-card').eq(1).find('input[name="duration"]').should('have.value', info2.duration);
  cy.get('exercise-card').eq(1).find('select[name="exercise-selection"]').should('have.value', info2.exercise);
  });

  it('error detection : no exercise selected', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything except the exercise
    cy.get('textarea[name="notes"]').type('abcd');
    cy.get('input[name="calories"]').type('1234');
    cy.get('input[name="sets"]').type('5');
    cy.get('input[name="duration"]').type('420');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('An exercise must be selected');
   })
  });

  it('error detection : no calorie input', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything except the calorie
    cy.get('textarea[name="notes"]').type('abcd');
    //cy.get('input[name="calories"]').type('1234');
    cy.get('input[name="sets"]').type('5');
    cy.get('input[name="duration"]').type('420');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Calories must be a positive number');
   })
  });

  it('error detection : negative calorie input', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything 
    cy.get('textarea[name="notes"]').type('abcd');
    cy.get('input[name="calories"]').type('-420');
    cy.get('input[name="sets"]').type('5');
    cy.get('input[name="duration"]').type('420');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Calories must be a positive number');
   })
  });

  it('error detection : no sets input', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything except the sets
    cy.get('textarea[name="notes"]').type('abcd');
    cy.get('input[name="calories"]').type('420');
    //cy.get('input[name="sets"]').type('5');
    cy.get('input[name="duration"]').type('420');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Sets must be a non-negative number');
   })
  });

  it('error detection : negative sets input', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything except the sets
    cy.get('textarea[name="notes"]').type('abcd');
    cy.get('input[name="calories"]').type('420');
    cy.get('input[name="sets"]').type('-5');
    cy.get('input[name="duration"]').type('420');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Sets must be a non-negative number');
   })
  });

  it('error detection : no duration input', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything except duration
    cy.get('textarea[name="notes"]').type('abcd');
    cy.get('input[name="calories"]').type('420');
    cy.get('input[name="sets"]').type('5');
    //cy.get('input[name="duration"]').type('420');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Duration must be a positive number');
   })
  });

  it('error detection : 0 duration input', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything w/ bad duration input
    cy.get('textarea[name="notes"]').type('abcd');
    cy.get('input[name="calories"]').type('420');
    cy.get('input[name="sets"]').type('5');
    cy.get('input[name="duration"]').type('0');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Duration must be a positive number');
   })
  });

  it('error detection : negative duration input', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // fill out everything w/ bad duration input
    cy.get('textarea[name="notes"]').type('abcd');
    cy.get('input[name="calories"]').type('420');
    cy.get('input[name="sets"]').type('5');
    cy.get('input[name="duration"]').type('-40');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Duration must be a positive number');
   })
  });
  
  it('error detection : multiple bad inputs', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // add bad inputs
    cy.get('textarea[name="notes"]').type('abcd');
    //cy.get('input[name="calories"]').type('420');
    cy.get('input[name="sets"]').type('-5');
    //cy.get('input[name="duration"]').type('420');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Calories must be a positive number');
      expect(t).to.contains('Sets must be a non-negative number');
      expect(t).to.contains('Duration must be a positive number');
   })
  });

  it('error detection : error does not save', () => {
    login();
    cy.get('#fixed-add-button').click()
    cy.get('button#cardio-button').click()
  
    // add bad inputs
    cy.get('textarea[name="notes"]').type('abcd');
    //cy.get('input[name="calories"]').type('420');
    cy.get('input[name="sets"]').type('-5');
    //cy.get('input[name="duration"]').type('420');
    cy.get('select[name="exercise-selection"]').select('running');

    // hit save. should fail and cause an alert
    cy.get('button.save-button').click();

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Invalid input');
      expect(t).to.contains('Calories must be a positive number');
      expect(t).to.contains('Sets must be a non-negative number');
      expect(t).to.contains('Duration must be a positive number');
    })

    cy.reload();

    cy.get('exercise-card').should('not.exist');  
  });

});

