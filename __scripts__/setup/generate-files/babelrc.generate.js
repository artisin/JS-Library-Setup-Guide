const fs   = require('fs-extra');
const path = require('path');

/**
 * onfigs the .babelrc file
 * @param  {str} options.dir             -> dir to write to
 * @param  {str} options.babelNodeTarget -> node target
 * @param  {str} options.babelWebTarget  -> web target
 * @param  {arr} options.target          -> webpack targets
 */
const config = function ({dir, babelNodeTarget, babelWebTarget, target}) {
  let data = fs.readFileSync(path.resolve(__dirname, './template/.babelrc'));
  if (data) {
    data = data.toString();

    /**
     * Node target update
     */
    if (babelNodeTarget && target.includes('node')) {
      //update nodeTarget
      data = data.replace('<nodeTarget>', babelNodeTarget);
      data = data.replace('<<NODE ', '');
    }else {
      //remove
      data = data.replace(/<<NODE.*?>>/, '');
    }

    /**
     * Web target update
     */
    if (babelWebTarget && target.includes('web') || target.includes('web minified')) {
      //update nodeTarget
      data = data.replace('<webTarget>', `last ${babelWebTarget} versions`);
      data = data.replace('<<WEB ', '');
    }else {
      //remove
      data = data.replace(/<<WEB.*?>>/, '');
    }
    //remove >>
    data = data.replace(/\s>>/g, '');
    //remove empty lines
    data = data.replace(/^\s*\n/gm, '');
    //write out file
    fs.writeFileSync(`${dir}.babelrc`, data);
  }
};


/**
 * Example input
 */
// config({
//   dir: './__scripts__/setup/__tests__/',
//   babelNodeTarget: '4',
//   babelWebTarget: '2',
//   target: ['node', 'web']
// });



module.exports = config;

