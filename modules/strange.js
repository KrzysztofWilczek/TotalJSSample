exports.name = 'strange';
exports.version = '1.01';

framework.middleware('strange-middleware', function(req, res, next, options) { 
    var someValue = this.req.cookie('some_cookie');
    if (someValue) {
        framework.module('strange').getValue.someValue = someValue;
    }
    next();
});

exports.setValue = function(value) {
    this.getValue.someValue = value;
};

exports.getValue = function() {
    return this.getValue.someValue;
}