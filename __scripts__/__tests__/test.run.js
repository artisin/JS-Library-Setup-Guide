const _      = require('lodash');
const fs     = require('fs-extra');
const should = require('should');
const path   = require('path');
const del    = require('del');
const colur  = require('colur');

const testAnswers = require('./test.answers.js');



const testInit = function(buildScript) {
  colur('__scripts__/__tests__/test.run.js::: -> START');

  const testBuildPath = path.join(process.cwd(), '__scripts__/__tests__/build/');
  console.log(testAnswers)
  debugger

  _.forEach(testAnswers, function(answers) {
    debugger
    describe(answers.test, function () {
      buildScript(testBuildPath, answers);

      //delete build
      afterEach(function () {
        debugger
        if (fs.existsSync(testBuildPath)) {
          del.sync(testBuildPath);
        }
      });
    });
  });

  colur('__scripts__/__tests__/test.run.js::: -> END', {end: true});

  // const runTests = function () {
  //   const ctrrcPath = path.join(process.cwd(), '.ctrrc.yml');
  //   describe('JS:test', function () {
  //     before('JS:test', function () {
  //       colur('__tests__/run.js.test.js:::test -> START');
  //     });
  //     //glob and run
  //     const testGlob = glob.sync(['./__tests__/cases-api/**/*.js', '!./__tests__/cases-api/**/helpers.js']);
  //     _.forEach(testGlob, function (testFile) {
  //       if (!testFile.match('_helpers')) {
  //         addTest(testFile);
  //       }
  //     });
  //     //check if .ctrrc existis and del if so after each test
  //     afterEach(function () {
  //       if (fileExists(ctrrcPath)) {
  //         del.sync(path.join(ctrrcPath));
  //       }
  //     });

  //     after('JS:test', function () {
  //       colur('__tests__/run.js.test.js:::test -> END', {end: true});
  //     });
  //   });
  // };
  // runTests();

};

module.exports = testInit;
