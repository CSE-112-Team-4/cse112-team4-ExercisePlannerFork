# 5/17 WorkPlanning

## Participants

Luffy, John, Hamza, Daniel, David, Lebin, Ilan

## Sprint 2 Retrospective

### Retrospective Review

**What Worked / Who Accomplished What:**

#### Non Coding

- [x] **Hand-draw out the wireframes on Figma** (Priority: <span style="color:red">HIGH</span>)
  - Accomplished by: David

#### Coding

- [x] **Refactoring ExerciseCard.js** (Priority: <span style="color:red">HIGH</span>)
  - Accomplished by: Luffy
- [x] **Code Standards** (Priority: <span style="color:yellow">MEDIUM</span>)
  - Accomplished by: Ilan
- [x] **Refining CSS** (Priority: <span style="color:red">HIGH</span>)
  - Accomplished by: Luffy, Hamza
- [ ] **Code of Conduct/Rules Documents** (Priority: <span style="color:red">HIGH</span>)
  - Assignee: Luffy
- [x] **Start on Login/Authentication Page** (Priority: <span style="color:green">LOW</span>)
  - Accomplished by: Lebin

**What Didn't Work / Proposed Solution:**

- In the previous sprints, we attempted to divide the work to individuals in an attempt to make some progress in our repo. This ultimately backfired as some work didn’t get done.
  - Solution: For the next sprint, we are enforcing pairs in each task, making sure that small groups are either meeting or calling for accountability.

**Notes / Concerns:**

- Lebin created a local demo of using a database (username and password)
- Daniel was checking how to implement the database in javascript, but held off changes for code refactor
- John did not pull his weight
- David made the wireframes. Uploaded to the Google Drive group repo
- Ilan created the new superlinter and made a pull request with the updated style changes
  - advised a VS code extension to force adherence to style
- Hamza focused on CSS changes. Held off changes for code refactor
- Luffy carried the team. Did the code refactor.
  - Almost done, while some of the buttons currently don’t work, the structure has been completely redone and MUCH cleaner
- Ryan is out sick (has COVID).
  - Lack of communication and not sure how much he can contribute.

## Sprint 3

Length: 1 week (5/18 ~ 5/24)

### Time Commitments

- 7 hrs / per person

### Tasks

#### Non Coding

- **Migrating Single Source of Truth** (Priority: <span style="color:red">HIGH</span>)
  - Moving all notes/planning in the drive to the repo
  - “Make it look pretty”
    - Assignee: John
- **Documentation Administration (Code of conduct, ADRs, Team Page)** (Priority: <span style="color:red">HIGH</span>)
  - Include doc with values, branch naming convention, team members, adr's, etc
    - Assignee: Ilan, David

#### Coding

- **Finish Refactoring** (Priority: <span style="color:red">HIGH</span>)

  - Abstract away the local storage
  - Assignee: Luffy, Hamza

- **Testing** (Priority: <span style="color:yellow">MEDIUM</span>)
  - Make a branch from the current refactor and see if we can make tests
  - Take inspiration from Hamza’s repo
  - Assignee: John, Daniel
    - John’s Note: Talk to Ilan about CI/CD of the testing

### Conclusion / Closing Thoughts / Notes From Check-in With TA (Jason)

- IMPORTANT: This week, we talked with the professor and discussed we want to prioritize the separation of html,css,js over anything else. This means that the refactoring is much on a larger scale than we imagined, almost a green-field project.
  - We will note this in the adr
- Meet up after monday’s lec for an hour to force commitment checks
- We need to refine the design of the card
- Mid-project check-in during class on Wednesday
