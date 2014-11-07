exports.install = function(framework) {
	framework.route('/set/{value}/', view_set);
	framework.route('/get/', view_get, ['#strange-middleware']);
};

function view_get(req) {
	var val = this.module('strange').getValue();
	this.plain('Get -> {0}'.format(val));
}

function view_set(value) {
	this.res.cookie('some_cookie', value, new Date().add('day', 1));
	this.plain('Set -> {0}'.format(value));
}