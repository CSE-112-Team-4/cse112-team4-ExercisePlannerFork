# Remote storage modality

 - Status: undecided
 - Deciders: none

## Context and Problem Statement

There are several different ways we could approach remote storage

## Considered Options

 - Have a local copy of user's information, send a copy to remote every time local is updated
 - Have a local copy of user's information, send a copy to remote when user tells to
 - Have only the currently used information locally, send updates to specific parts of the user's file on reemote when those updates are made

## Decision outcome

none

## Pros and cons
Pros:
 - Whole automatic storage is easy to implement
 - Whole prompted storage sends less over the net and allows to roll back to the previous saved snapshot as a side effect
 - Modular storage saves net resources, is closer to industry standards, and hurts our pride less

Cons:
 - Whole automatic storage is extremely inefficient with resources
 - Whole prompted storage allows unsaved changes to be easily lost by forgetful users
 - Modular storage takes a lot more time to implement
