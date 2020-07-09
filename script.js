
// 2) IDENTIFY AND STORE ELEMENTS IN JAVASCRIPT VARIABLES
// identify our form and list in html and save it in a variable
const form = document.querySelector('.myToDoForm'); // . for class="" and # for id=""
const list = document.querySelector('.myList');

// 3) ADD LISTENER FOR FORM SUBMISSION AND EXECUTE OUR FUNCTION
// Add event listener of type "submit" to our form
// When this listener notices that form "submits",
// execute our function called functionToExecuteWhenFormSubmits
// aka, link our form submit to a function
form.addEventListener('submit', functionToExecuteWhenFormSubmits);

// 4) FORM IS SUBMITTED, NOW OUR FUNCTION EXECUTES
function functionToExecuteWhenFormSubmits(event) {
    // PREVENT PAGE FROM REFRESHING (a method function provided by browser/event)
    event.preventDefault();

    // Extract our input value from event
    const taskFromInputValue = event.target[0].value;

    // create a list element to be added to our page
    const listItem = document.createElement('li');
    //add our extracted value to this new element we made
    listItem.innerHTML = taskFromInputValue;

    // add click event listener to our list ITEM
    listItem.addEventListener('click', listClickEvent);

    //add it to our page list
    list.appendChild(listItem);

    event.target[0].value = '';
}

function listClickEvent(event) {
    const listItemToDelete = event.target;

    if (listItemToDelete.style.textDecoration === 'line-through') {
        listItemToDelete.style.textDecoration = ''
    }
    else {
        listItemToDelete.style.textDecoration = 'line-through'
    }
}

