var createNamespace = require('continuation-local-storage').createNamespace,
    namespace = createNamespace('totaljs.namespace.test');

require('total.js').http('debug');