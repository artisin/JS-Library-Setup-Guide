const fs         = require('fs-extra');
const path       = require('path');
const _          = require('lodash');
const jsonFormat = require('json-format');

/**
 * Configs package.json
 */
const config = function (options) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/package.json'));
  if (data) {
    data = data.toString();

    const keys = ['NPMorYARN', 'libraryName', 'libraryDescription', 'authorName', 'gitUSERNAME', 'gitPROJECTNAME'];
    _.forEach(keys, function (val) {
      const reg = new RegExp(`<${val}>`, 'g');
      data = data.replace(reg, options[val]);
    });
    if (!options.tests && !options.bumpedrc) {
      data = data.replace(/<<RT.*?>>/g, '');
    }else {
      data = data.replace(/<<RT/g, '');
    }
    //tests, bumped, and commitizen
    if (options.tests) {
      data = data.replace(/<<T/g, '');
    }else {
      data = data.replace(/<<T.*?>>/g, '');
    }
    if (options.bumpedrc) {
      data = data.replace(/<<B/g, '');
    }else {
      data = data.replace(/<<B.*?>>/g, '');
    }
    if (options.commitizen) {
      data = data.replace(/<<C/g, '');
    }else {
      data = data.replace(/<<C([\s\S]*?)>>/g, '');
    }

    //need to remove left over
    data = data.replace(/>>/g, '');
    debugger
    //formate and write out file
    fs.writeFileSync(`${options.dir}package.json`, jsonFormat(JSON.parse(data), {
      type: 'space',
      size: 2
    }));
  }
};

// /**
//  * Example input
//  */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   NPMorYARN: 'yarn',
//   libraryName: 'js-base-library',
//   libraryDescription: 'A test build',
//   authorName: 'te',
//   gitUSERNAME: 'artisin',
//   gitPROJECTNAME: 'js-base-library',
//   tests: true,
//   bumpedrc: true,
//   commitizen: true
// });


module.exports = config;

