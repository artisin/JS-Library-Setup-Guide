const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the contributing file
 */
const config = function ({dir, gitUSERNAME, gitPROJECTNAME, authorName}) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/LICENSE.txt'));
  if (data) {
    data = data.toString();
    data = data.replace(/<currentYEAR>/g, new Date().getFullYear());
    data = data.replace(/<authorName>/g, authorName);
    data = data.replace(/<gitUSERNAME>/g, gitUSERNAME);
    data = data.replace(/<gitPROJECTNAME>/g, gitPROJECTNAME);

    //write out file
    fs.writeFileSync(`${dir}LICENSE.txt`, data);
  }
};


/**
 * Example input
 */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   gitUSERNAME: 'artisin'
//   gitPROJECTNAME: 'js-base-library',
//   authorName: 'te',
// });


module.exports = config;

