var tuna = require('./controller.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		tuna.index(req, res);
	});
	app.get('/search', function(req, res) {
		tuna.search_html(req, res);
	});
	app.get('/part_search', function(req, res) {
		tuna.part_search(req, res);
	});
	app.get('/business_search', function(req, res) {
		tuna.business_search(req, res);
	});
	app.get('/form', function(req, res) {
		tuna.form_(req, res);
	});
	app.get('/part_form', function(req, res) {
		tuna.part_form(req, res);
	});
	app.get('/transit_form', function(req, res) {
		tuna.transit_form(req, res);
	});
	app.post('/re_form', function(req, res) {
		var function_name = 'addProInfo'
		tuna.re_form(req, res, function_name);
	});
	app.post('/re_part_form', function(req, res) {
		var function_name = 'addIngInfo'
		tuna.re_form(req, res, function_name);
	});
	app.post('/re_transit_form', function(req, res) {
		var function_name = 'addLogInfo'
		tuna.re_form(req, res, function_name);
	});
	app.get('/source/:id', function(req, res) {
		var function_name = 'getProInfo'
		tuna.get_tuna(req, res, function_name);
	});
	app.get('/part/:id', function(req, res) {
		var function_name = 'getIngInfo'
		tuna.get_tuna(req, res, function_name);
	});
	app.get('/transit/:id', function(req, res) {
		var function_name = 'getLogInfo'
		tuna.get_tuna(req, res, function_name);
	});
}
