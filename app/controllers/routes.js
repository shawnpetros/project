var express = require('express'),
	router = express.Router();

module.exports = function (app) {
	app.use('/', router);

	router.get('/', function (req, res) {
		res.status(200).json('Goodbye World!');
	});

	router.post('/', function (req, res) {
		res.status(201).json("What's UP!");
	});
};