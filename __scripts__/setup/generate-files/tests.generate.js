const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the .github folder
 */
const config = function ({dir, libraryName, target}) {
  //create dir
  fs.emptyDirSync(`${dir}__tests__`);
  //update issue tmpl
  let data = fs.readFileSync(path.resolve(__dirname, './template/__tests__/tests.run.js'));
  if (data) {
    data = data.toString();
    //config path need be
    if (!target.includes('node')) {
      if (target.includes('web')) {
        libraryName = `${libraryName}.browser`;
      }else {
        libraryName = `${libraryName}.browser.min`;
      }
    }
    data = data.replace(/<libraryName>/g, libraryName);
    //write out file
    fs.writeFileSync(`${dir}__tests__/tests.run.js`, data);
  }
};


// /**
//  * Example input
//  */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   libraryName: 'js-base-library',
//   target: ['node'],
// });


module.exports = config;

