// Allow use of grunt-newer with LESS
// issue: https://github.com/tschaub/grunt-newer/issues/29

var fs = require('fs');
var path = require('path');

function checkForNewerImports(lessFile, mTime, include) {
    fs.readFile(lessFile, "utf8", function(err, data) {
        var lessDir = path.dirname(lessFile),
            regex = /@import "(.+?)(\.less)?";/g,
            shouldInclude = false,
            match;

        while ((match = regex.exec(data)) !== null) {
            // All of my less files are in the same directory,
            // other paths may need to be traversed for different setups...
            var importFile = lessDir + '/' + match[1] + '.less';
            if (fs.existsSync(importFile)) {
                var stat = fs.statSync(importFile);
                if (stat.mtime > mTime) {
                    shouldInclude = true;
                    break;
                }
            }
        }
        include(shouldInclude);
    });
}

module.exports.checkForNewerImports = checkForNewerImports;

module.exports.overrideLess = function(detail, include) {
    if (detail.task === 'less') {
        checkForNewerImports(detail.path, detail.time, include);
    } else {
        include(false);
    }
};