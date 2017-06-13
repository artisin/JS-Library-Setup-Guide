const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the .github folder
 */
const config = function ({dir, gitPROJECTNAME}) {
  //create dir
  fs.emptyDirSync(`${dir}.github`);
  //update issue tmpl
  let data = fs.readFileSync(path.resolve(__dirname, './template/.github/ISSUE_TEMPLATE.md'));
  if (data) {
    data = data.toString();
    data = data.replace(/<gitPROJECTNAME>/g, gitPROJECTNAME);
    //write out file
    fs.writeFileSync(`${dir}.github/ISSUE_TEMPLATE.md`, data);
  }
  //copy over pr template
  fs.copySync(
    path.resolve(__dirname, './template/.github/PULL_REQUEST_TEMPLATE.md'),
    `${dir}.github/PULL_REQUEST_TEMPLATE.md`
  );
};


// /**
//  * Example input
//  */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   gitPROJECTNAME: 'js-base-library',
// });


module.exports = config;

