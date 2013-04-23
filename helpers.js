var getLogger, path;

path = require('path');

getLogger = function(filename){
    var fname = path.basename(filename);
    return function() {
        var args = ['[' + fname + '] '];
        for (var i=0;i<arguments.length;i++) {
            args.push(arguments[i]);
        }
        console.log.apply(console, args);
    };
};

module.exports.getLogger = getLogger;
