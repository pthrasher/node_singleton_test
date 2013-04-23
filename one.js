var lib, infoLog, helpers, log;
helpers = require('./helpers');

log = helpers.getLogger(__filename);

log('BODY EXECUTE START');

lib = require('./lib');


module.exports.foo = function() {
    log('FOO EXECUTE START');
    log('lib.personalPropertyOfLib: ', lib.personalPropertyOfLib);
    log('lib.personalPropertyOfOne: ', lib.personalPropertyOfOne);
    log('lib.personalPropertyOfTwo: ', lib.personalPropertyOfTwo);
    lib.personalPropertyOfLib = 'one.js touch.';
    lib.personalPropertyOfOne = 'one.js was here.';
    log('lib.personalPropertyOfLib: ', lib.personalPropertyOfLib);
    log('lib.personalPropertyOfOne: ', lib.personalPropertyOfOne);
    log('lib.personalPropertyOfTwo: ', lib.personalPropertyOfTwo);
    log('FOO EXECUTE FINISH');
};

module.exports.fooAfter = function() {
    log('FOOAFTER EXECUTE START');
    log('lib.personalPropertyOfLib: ', lib.personalPropertyOfLib);
    log('lib.personalPropertyOfOne: ', lib.personalPropertyOfOne);
    log('lib.personalPropertyOfTwo: ', lib.personalPropertyOfTwo);
    log('FOOAFTER EXECUTE FINISH');
};

log('BODY EXECUTE FINISH');
