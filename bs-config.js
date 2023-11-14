const fs = require('fs');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

module.exports = {
    "files": ['./dist/**/*.{html,css,js,webp,jpg,png,svg}'],
    "watchEvents": [
        "change", "add"
    ],
    "ghostMode": false,
    "server": {
        "baseDir": "./dist/"
    },
    "proxy": false,
    "online": true,
    "open": "external",
    "reloadOnRestart": true,
    "notify": false,
    "startPath": '',
    "rewriteRules": [
    {
      "match": /<!--#include virtual="(.+?)" -->/g,
      "fn": function(req, res, match, filename) {
        const filePath = path.join("dist", filename);
        if (!fs.existsSync(filePath)) {
          return `<span style="color: red">${filePath} could not be found</span>`;
        }
        return fs.readFileSync(filePath);
      }
    }
  ]
};
