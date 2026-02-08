# simple-clean-beginner-friendly-Todo-List
A basic Todo List application built using vanilla JavaScript, allowing users to add tasks with due dates and delete them dynamically without reloading the page.  This project focuses on DOM manipulation, arrays, and event handling in JavaScript.

Features

Add a todo task with a name and due date

Display all todos dynamically on the page

Delete individual tasks

Real-time UI updates (no page refresh)

Beginner-friendly and easy-to-understand logic



Technologies Used

HTML

CSS

JavaScript (Vanilla JS)


How the App Works

User enters:

Task name

Due date

Clicks the Add button

The task is stored in a JavaScript array as an object:

{
  name: "Task Name",
  dueDate: "YYYY-MM-DD"
}


The todo list is rendered dynamically using DOM manipulation

Clicking Delete removes the task from the array and re-renders the list


Key Concepts Used

Arrays & Objects

for loop

DOM manipulation (querySelector, innerHTML)

Event listeners

Dynamic rendering

Inline delete functionality using splice()


Possible Improvements

Save todos using localStorage

Add edit/update functionality

Improve UI with animations

Add validation for empty inputs

Convert to modular JavaScript structure
