# About
grunt-newer-less is a set of helpers which enables LESS compilation when using grunt-newer.


# Install

```javascript
npm install grunt-newer-less
```

# Add require

```javascript
var gruntNewerLess = require('grunt-newer-less');
```

# Usage Option 1: standard override of 'newer' grunt task:

```javascript
newer: {
    options: {
        override: gruntNewerLess.overrideLess
    }
}
```

# Usage Option 2: custom override of 'newer' grunt task:

```javascript
newer: {
    options: {
        override: function(detail, include) {
            if (detail.task === 'less') {
                gruntNewerLess.checkForNewerImports(detail.path, detail.time, include);
            } else {
                include(false);
            }
        }
    }
}
```

# Credits
Adapted from the following gists:
https://gist.github.com/cgmartin/10328349
https://gist.github.com/migreva/2a926b95f25366da657c



