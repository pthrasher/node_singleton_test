var one, two, helpers, log;
helpers = require('./helpers');

log = helpers.getLogger(__filename);

log('BODY EXECUTE START');

one = require('./one');
two = require('./two');

one.foo();
two.foo();

one.fooAfter();
two.fooAfter();

log('BODY EXECUTE FINISH');
