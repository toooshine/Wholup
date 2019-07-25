const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	salt: String,
	token: String
});

var usersModel = mongoose.model('users', usersSchema);
module.exports = usersModel;
