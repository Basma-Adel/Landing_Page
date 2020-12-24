# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

/*******************************************************/

First move, I looped in every section and captured its data-nav, then create a list item with anchor tag contains text same as section data-nav

Second move, I looped again in each section getting its boundaries to know if it is in the viewport, then give the section in view port a class named 'your-active-class', then check which link has the same text content as data-nav of the activated section then give it also a class named 'active'

there is a bug which I cannot understand!
for (Second move) the code loop just one time and find the active section for once only, and don't update while scrolling!
