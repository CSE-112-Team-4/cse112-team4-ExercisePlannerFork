# Code of Conduct

This is team 4's code of conduct. Please follow it when working on the project.

## General

- Missing meetings
  - Message in slack when you miss a meeting. We need to track who attended which ones to keep track of tasks and information flow.
- Shared tasks
  - If you're sharing a task with someone, keep communication with them up during the sprint.

  

## Github

 - Commit/pull request descriptions
   - Either write comprehensive commit/pr descriptions, or write the issue numbers is description.
 - PR reviews
   - 2 people need to approve a pull request to merge to main.
   - Read the pull requests before approving them. If the code is unclear or uncommented, reject it and explain why you rejected. If the code takes you more than 15 minutes to understand after you've read it, it's probably either too messy or uncommented, which makes it a likely candidate for rejection.
 - Naming
   - Branches  should be named as the stories/tasks they're dedicated to, incluing the story/task numbers.
   - Stories should be named as "US/DS[story number] - [story name]"
   - Tasks need to be related to stories: "US/DS[story number] - [task number] [task name]"
   - We index everything by a combination of story type, story number, and task number. When creating a new story/task, make sure you're not creating overlaps. If we have 2 issues marked as US3, it's unclear which one of them the task US3 - 1 relates to.
 - Project board
   - When doing a task, mark the corresponding issue as "In Progress" on the board. 
   - Check the board for existing issues before adding new ones to avoid duplicates.
   - When adding issues to the repository, add them to the board as well.
   - Tag the issues when adding them to the board.


  

## Code

 - Styling
   - Use the linters/prettier.
 - Separation of languages
   - Try to keep CSS, JS, and HTML separate. Doing otherwise creates tech debt.
 - Comments
   - Keep the code commented. When you make an addition, a team member should be able to understand the general logic of the changes by mostly reading comments.
