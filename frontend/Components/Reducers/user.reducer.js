export default function(user = [], action) {
	if (action.type === 'setUserData') {
		console.log(action);
		var userCopy = {
			firstName: action.firstName,
			lastName: action.name,
			email: action.email
		};
		return userCopy;
	} else {
		return user;
	}
}
