const userForm = document.getElementById("user-Form");

	userForm.addEventListener('submit', function(event) {
    	event.preventDefault();
	const userInput = document.getElementById("user-Input").value;
	const submit = document.getElementById("submitButton").value;

	let userMessage = document.createElement('P');
	let t  = document.createTextNode(userInput);
	userMessage.appendChild(t);
    document.body.appendChild(userMessage);

});

// console.log(userInput);