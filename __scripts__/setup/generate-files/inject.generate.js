const fs   = require('fs-extra');
const path = require('path');
const _    = require('lodash');

/**
 * Injects static files
 */
const config = function ({dir, files}) {
  //loop and inject
  _.forEach(files, function (val) {
    const file = path.resolve(__dirname, `./inject/${val}`);
    if (fs.existsSync(file)) {
      fs.copySync(file, dir + val);
    }
  });
};

// /**
//  * Example input
//  */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   files: ['.bumpedrc', '.cz-config.js', '__tests__']
// });


module.exports = config;

