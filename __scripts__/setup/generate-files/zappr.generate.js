const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the .zappr file
 */
const config = function ({dir, gitUSERNAME}) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/.zappr.yml'));
  if (data) {
    data = data.toString();
    data = data.replace(/<gitUSERNAME>/g, gitUSERNAME);

    //write out file
    fs.writeFileSync(`${dir}.zappr.yml`, data);
  }
};


/**
 * Example input
 */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   gitUSERNAME: 'artisin'
// });


module.exports = config;

