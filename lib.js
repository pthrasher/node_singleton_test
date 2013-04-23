var helpers, log;

helpers = require('./helpers');

log = helpers.getLogger(__filename);

log('BODY EXECUTE START');

module.exports.foo = function() {
    log('foo()');
};

module.exports.personalPropertyOfLib = 'This is my personal property!';

log('BODY EXECUTE FINISH');
