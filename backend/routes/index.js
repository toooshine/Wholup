var express = require('express');
var router = express.Router();
const UsersModel = require('../models/users');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/signin', function(req, res, next) {
	UsersModel.findOne(
		{
			email: req.query.email,
			password: req.query.password
		},
		(err, user) => {
			if (!user) {
				res.json({ result: false, isUserExist: false });
			} else {
				res.json({ result: true, isUserExist: true, user });
			}
		}
	);
});

router.post('/signup', function(req, res, next) {
	console.log(req.body);
	var newUser = new UsersModel({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		password: req.body.password
	});
	newUser.save(function(error, user) {
		res.json({ result: true, user });
	});
});

module.exports = router;
