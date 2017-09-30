const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the .nvmrc file
 */
const config = function ({dir, nvmrc}) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/.nvmrc'));
  if (data) {
    data = data.toString();
    data = data.replace(/<VERSION>/g, nvmrc).replace(/"|'/g, '');

    //write out file
    fs.writeFileSync(`${dir}.nvmrc`, data);
  }
};


/**
 * Example input
 */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   nvmrc: '8.5.0'
// });


module.exports = config;

