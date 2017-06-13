const fs   = require('fs-extra');
const path = require('path');

/**
 * Configs the webpack.config.js file
 * @param  {str} options.dir         -> dir to write to
 * @param  {str} options.libraryName -> library name
 * @param  {arr} options.target      -> webpack targets
 */
const config = function ({dir, libraryName, target}) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/webpack.config.js'));
  if (data) {
    data = data.toString();
    //replace any spaces with -
    data = data.replace('<libraryName>', libraryName);
    //need to remove " since we need the raw values
    target = !target.includes('web minified') ? target : target.pop() && target.unshift('webMin') && target;
    data = data.replace(/<target>/g, JSON.stringify(target).replace(/"/g, '').replace(/,/g, ', '));
    //for dev we only want one complie target, web or node
    if (target.includes('web')) {
      data = data.replace(/<targetDEV>/g, JSON.stringify(['web']).replace(/"/g, '').replace(/,/g, ', '));
    }else {
      data = data.replace(/<targetDEV>/g, JSON.stringify(['node']).replace(/"/g, '').replace(/,/g, ', '));
    }

    //write out file
    fs.writeFileSync(`${dir}webpack.config.js`, data);
  }
};

// /**
//  * Example input
//  */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   libraryName: 'test-library',
//   target: ['node', 'web']
// });


module.exports = config;

