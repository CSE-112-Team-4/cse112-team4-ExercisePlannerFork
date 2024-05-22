# Refactoring priority

 - Status: accepted
 - Deciders: whole team

## Context and Problem Statement

The codebase we inherited had some unsustainable design decisions, and we believed that it could have created difficulties later

## Considered Options

 - Refactor the code
 - Ignore the existing problems and hope they don't create new ones

## Decision outcome

Went through with refactoring

## Pros and cons
Pros:
 - Easy to add new code after refactoring due to becoming more modular
 - Easier understaning of the codebase for the less experienced team members

Cons:
 - Creates a major blocker, all other code and testing has to be suspended
 - Unsplittable task, going over 3 people is inefficient, so 5 people can't create new code while this task is getting completed
