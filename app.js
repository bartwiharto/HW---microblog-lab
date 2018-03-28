const userForm = document.getElementById("user-Form");

console.log(userForm);

	userForm.addEventListener('submit', function(event) {
    	event.preventDefault();
	const userInput = document.getElementById("user-Input").value;
	const submit = document.getElementById("submitButton").value;

console.log(userInput);
});

// console.log(userInput);