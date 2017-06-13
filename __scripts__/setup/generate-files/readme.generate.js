const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the contributing file
 */
const config = function ({dir, gitPROJECTNAME}) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/README.md'));
  if (data) {
    data = data.toString();
    data = data.replace(/<gitPROJECTNAME>/g, gitPROJECTNAME);

    //write out file
    fs.writeFileSync(`${dir}README.md`, data);
  }
};


/**
 * Example input
 */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   gitPROJECTNAME: 'js-base-library'
// });


module.exports = config;

