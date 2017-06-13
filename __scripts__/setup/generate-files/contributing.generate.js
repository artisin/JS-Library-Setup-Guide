const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the contributing file
 */
const config = function ({dir, gitUSERNAME, gitPROJECTNAME, NPMorYARN, commitizen}) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/CONTRIBUTING.md'));
  if (data) {
    data = data.toString();
    data = data.replace(/<gitUSERNAME>/g, gitUSERNAME);
    data = data.replace(/<gitPROJECTNAME>/g, gitPROJECTNAME);

    //yarn or npm
    if (NPMorYARN === 'yarn') {
      data = data.replace(/<NPMorYARN>/g, 'yarn');
      data = data.replace(/<<YARN/g, '');
    }else {
      data = data.replace(/<NPMorYARN>/g, 'npm');
      data = data.replace(/<<YARN.*?>>/g, '');
    }

    //commitizen
    if (commitizen) {
      data = data.replace(/<<C/g, '');
    }else {
      data = data.replace(/<<C([\s\S]*?)>>/g, '');
    }

    //remove extra
    data = data.replace(/>>/g, '');

    //write out file
    fs.writeFileSync(`${dir}CONTRIBUTING.md`, data);
  }
};

// /**
//  * Example input
//  */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   gitUSERNAME: 'artisin',
//   gitPROJECTNAME: 'js-base-library',
//   NPMorYARN: 'yarn',
//   commitizen: false
// });


module.exports = config;

