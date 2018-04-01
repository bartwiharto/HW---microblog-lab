const userForm = document.getElementById("user-Form");

	// Set a variable for counter, when each time a comment is submitted ++. When setting and item to local storage, up name by one(i.e. userInput1, userInput2) by adding userInput and the locally stored counter

	userForm.addEventListener('submit', function(event) {
    	event.preventDefault();
	const userInput = document.getElementById("user-Input").value;
	const submit = document.getElementById("submitButton").value;

	let userMessage = document.createElement('P');
	let print  = document.createTextNode(userInput);
	userMessage.appendChild(print);
    document.body.appendChild(userMessage);

	// localStorage.setItem("userInput", userInput);


    console.log(print);
});

// console.log(userForm);


// localStorage.setItem(print, document.createTextNode(userInput));