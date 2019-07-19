export default function(contactList = [], action) {
	if (action.type === 'addcontact') {
		console.log(action);
		var contactListCopy = [ ...contactList ];
		var isUserExist = false;

		for (var i = 0; i < contactListCopy.length; i++) {
			if (contactListCopy[i].name === action.name) {
				isUserExist = true;
				return contactList;
			}
		}

		if (!isUserExist) {
			var colorNbr = Math.random();
			var color;
			if (colorNbr < 0.25) {
				color = '#e67e22';
			} else if (colorNbr < 0.5) {
				color = '#3498db';
			} else if (colorNbr < 0.75) {
				color = '#16a085';
			} else {
				color = '#e74c3c';
			}

			contactListCopy.push({
				name: action.name,
				title: action.title,
				email: action.email,
				company: action.company,
				color: color
			});
			console.log('------->' + contactListCopy);
			return contactListCopy;
		}
	} else {
		return contactList;
	}
}
