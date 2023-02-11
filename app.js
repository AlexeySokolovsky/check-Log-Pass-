const input = document.querySelectorAll('input');
const form = document.querySelector('form');
const registeredUsers = [
	['admin', 'KoI18'],
	['manager', 'SuperMe108'],
	['editor', '12345'],
];

form.addEventListener('submit', checkInput);
function checkInput(event) {
	event.preventDefault();
	if (!validate()) {
		alert('All fields are required');
	}
	if (!checkForm()) {
		alert('Incorrect login or password');
	} else {
		alert('Access granted');
	}
	form.reset();
}
function validate() {
	let res = true;
	input.forEach((item) => {
		if (!item.value) {
			res = false;
		} else {
			res = true;
		}
	});
	return res;
}
function checkForm() {
	let res = true;
	for (let i = 0; i < registeredUsers.length; i++) {
		if (registeredUsers[i].includes(input[0].value) && registeredUsers[i].includes(input[1].value)) {
			res = true;
			break;
		} else {
			res = false;
		}
	}
	return res;
}

