// This project index.html file, main.css, and a main.js file. The index.html has a form section holding a ul with the id "to-dos". The css file has some basic styling and a "complete" class. The script file has an array of Todo items.

const myTodos = [
	'pick up laundry',
	'go to the gym',
	'drink 8 glasses of water',
	'finish assignment for 9013',
	'buy groceries',
	'go to the bank',
	'clean the bathroom',
	'do the dishes',
	'walk the dog',
	'call dad',
	'send a thank you card to Jill',
	'get 8 hours sleep',
];

// Load the Todo items into the DOM using the map method with either the createElement and append method or with template literals and the join method. The Todo items will have a checkbox and a label, with the for, name, and id attributes set to the index of the Todo item. The label will have the text of the Todo item.

const myToDosList = document.querySelector('#to-dos');
const uncheckAllButton = document.querySelector('#uncheck-all');

function displayToDos() {
	const toDoHTML = myTodos
		.map((todo, index) => {
			return `
        <label for="todo-${index + 1}">
          <input type="checkbox" name="todo-${index + 1}" id="todo-${
				index + 1
			}">
        ${todo}
        </label>
    `;
		})
		.join('');
	myToDosList.innerHTML = toDoHTML;
}

displayToDos();

// Attach an event listener to each myToDosList. Use event.target to determine which Todo item was clicked. When the Todo item is clicked, we'll toggle the "complete" css class on the Todo item to indicate whether the Todo item is complete or not. Adding the class will gray out the text and add a strikethrough line.  When the Todo item is checked, the checkbox input will be set to true, otherwise it will be false.

myToDosList.addEventListener('click', (event) => {
	if (event.target.type === 'checkbox') {
		console.log(event.target);
		console.log(event.target.closest('label'));
		event.target.checked
			? event.target.closest('label').classList.add('complete')
			: event.target.closest('label').classList.remove('complete');
	}
});

// Select the Unselect All Button on the page and attach an event listener to it. When the button is clicked, we'll unselect all the Todo items from the DOM using forEach.

function uncheckAll() {
	myToDosList.querySelectorAll("input[type='checkbox']").forEach((todo) => {
		todo.checked = false;
		todo.closest('label').classList.remove('complete');
	});
}

uncheckAllButton.addEventListener('click', uncheckAll);

// Use the map method to create an array of objects from the Todo items. Each object will have a text property and a completed property. The text property will be the text of the Todo item and the completed property will be true or false depending on whether the Todo item is complete or not.

// Use the filter method to create an array of objects that are not complete.

// OPTIONAL: Use the reduce method to count the number of Todo items that are not complete.

// Pass the filtered array and the count number (OPTIONAL) into a function that tells the user the amount Todo items that are not complete, and what they are.
