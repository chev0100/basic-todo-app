# Basic To Do App

## Instructions

1. This project index.html file, main.css, and a main.js file. The index.html has a form section holding a ul with the id "to-dos". The css file has some basic styling and a "complete" class. The script file has an array of Todo items.

2. Load the Todo items into the DOM using the map method with either the createElement and append method or with template literals and the join method. The Todo items will have a checkbox and a label, with the for, name, and id attributes set to the index of the Todo item. The label will have the text of the Todo item.

3. Use the forEach method to attach an event listener to each Todo item. When the Todo item is clicked, we'll toggle the "complete" css class on the Todo item to indicate whether the Todo item is complete or not. Adding the class will gray out the text and add a strikethrough line. When the Todo item is checked, the checkbox input will be set to true, otherwise it will be false.

4. Use the map method to create an array of objects from the Todo items. Each object will have a text property and a completed property. The text property will be the text of the Todo item and the completed property will be true or false depending on whether the Todo item is complete or not.

5. Use the filter method to create an array of objects that are not complete.

6. OPTIONAL: Use the reduce method to count the number of Todo items that are not complete.

7. Pass the filtered array and the count number (OPTIONAL) into a function that tells the user the amount Todo items that are not complete, and what they are.
