exports.name = 'strange';
exports.version = '1.01';

var getNamespace = require('continuation-local-storage').getNamespace,
    namespace = getNamespace('totaljs.namespace.test');

framework.middleware('strange-middleware', function(req, res, next, options) { 

    var self = this;

    // wrap the events from request and response
    namespace.bindEmitter(req);
    namespace.bindEmitter(res);
 
    // run following middleware in the scope of
    // the namespace we created
    namespace.run(function() {
        // set someValue on the namespace, makes it
        // available for all continuations
        var someValue = self.req.cookie('some_cookie');
        if (someValue) {
            namespace.set('someValue', someValue);
        }
        next();
    });
});

exports.setValue = function(value) {
    this.getValue.someValue = value;
};

exports.getValue = function() {
    return namespace.get('someValue');
}