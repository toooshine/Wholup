var express = require('express');
var router = express.Router();
var SHA256 = require('crypto-js/sha256');
var encBase64 = require('crypto-js/enc-base64');
var uid2 = require('uid2');
const UsersModel = require('../models/users');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/signin', function(req, res, next) {
	UsersModel.findOne(
		{
			email: req.query.email
		},
		(err, user) => {
			var hash = SHA256(req.query.password + user.salt).toString(encBase64);

			if (hash === user.password) {
				res.json({ result: true, isUserExist: true, user });
			} else {
				res.json({ result: false, isUserExist: false });
			}
		}
	);
});

router.post('/signup', function(req, res, next) {
	console.log(req.body);

	var salt = uid2(32);
	var newUser = new UsersModel({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		salt: salt,
		password: SHA256(req.body.password + salt).toString(encBase64),
		token: uid2(32)
	});
	newUser.save(function(error, user) {
		res.json({ result: true, user });
	});
});

module.exports = router;
