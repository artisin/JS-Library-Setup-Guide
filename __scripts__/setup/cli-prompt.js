const path     = require('path');
const fs       = require('fs-extra');
const inquirer = require('inquirer');

const when = {
  warning: (answers) => answers.warning,
  hasNode: (answers) => answers.warning && answers.target && answers.target.includes('node'),
  hasWeb: (answers)  => answers.warning && answers.target && answers.target.includes('web') || answers.target.includes('web minified')
};


/**
 * Questions to ask →
 */
const questions = [
  {
    type: 'confirm',
    name: 'warning',
    message: 'This script will overwrite current root files - are you sure you want to proceed?',
    default: false
  },
  {
    type: 'input',
    name: 'authorName',
    message: 'Enter your personal/company name for the license:',
    default: 'Joe',
    when: when.warning
  },
  {
    type: 'checkbox',
    message: 'Do you want to use npm or yarn?',
    name: 'NPMorYARN',
    validate: function (res) {
      return res.length && res.length === 1 ? true : 'You must select one or the other, but not both.';
    },
    choices: [{
      name: 'yarn',
      checked: true
    }, {
      name: 'npm'
    }],
    when: when.warning
  },
  {
    type: 'input',
    name: 'libraryName',
    message: 'Name of library/project:',
    default: 'project-name',
    when: when.warning
  },
  {
    type: 'input',
    name: 'gitUSERNAME',
    message: 'Enter your Github username:',
    default: 'user',
    when: when.warning
  },
  {
    type: 'input',
    name: 'gitPROJECTNAME',
    message: 'Enter the Github project name if different than library name:',
    default: function (val) {
      return val.libraryName;
    },
    when: when.warning
  },
  {
    type: 'input',
    name: 'libraryDescription',
    message: 'Enter a project description:',
    default: 'A build script',
    when: when.warning
  },
  {
    type: 'checkbox',
    message: 'Select target to compile to.',
    name: 'target',
    validate: function (res) {
      return res.length ? true : 'You must select at least one target';
    },
    choices: [{
      name: 'node',
      checked: true
    }, {
      name: 'web'
    }, {
      name: 'web minified'
    }],
    when: when.warning
  },
  {
    type: 'input',
    name: 'babelNodeTarget',
    message: 'Babel node compiler target',
    default: '4',
    when: when.hasNode
  },
  {
    type: 'input',
    name: 'babelWebTarget',
    message: 'Babel web compiler target... last X versions',
    default: '2',
    when: when.hasWeb
  },
  {
    type: 'confirm',
    name: 'readme',
    message: 'Overwrite current README.md?',
    default: false,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'tests',
    message: 'Include __tests__ directory and test dependencies?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'bumpedrc',
    message: 'Include .bumpedrc for releases?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'commitizen',
    message: 'Include commitizen for uniformed commits?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'zappr',
    message: 'Include .zappr.yml to enforces guidelines?',
    default: true,
    when: when.warning
  },
  //inject files
  {
    type: 'confirm',
    name: 'editorconfig',
    message: 'Include .editorconfig to maintain consistent coding styles?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'eslintrc',
    message: 'Include .eslintrc.js for JS style linting?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'gitattributes',
    message: 'Include .gitattributes to ensure consistent git settings across machine?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'gitignore',
    message: 'Include .gitignore to specify untracked files in git?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'npmignore',
    message: 'Include .npmignore to specify untracked npm files?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'changelog',
    message: 'Include inital empty CHANGELOG.md file?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'wercker',
    message: 'Include .wercker.yml to ensure consistent git settings across machine?',
    default: true,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'git',
    message: 'DELETE .git folder the current git reference? (Remember to run the `git init` command)',
    default: false,
    when: when.warning
  },
  {
    type: 'confirm',
    name: 'removeSelf',
    message: 'Remove this build script?',
    default: false,
    when: when.warning
  }
];


inquirer.prompt(questions).then(function (answers) {
  //Directory to inject/write files to
  const DIR = '';
  if (answers.warning) {
    //first remove current root files
    const fileList = function(rootDir) {
      return fs.readdirSync(rootDir).reduce(function(list, file) {
        const name = path.join(rootDir, file);
        const isDir = fs.statSync(name).isDirectory();
        return isDir ? list : list.concat(file);
      }, []);
    };
    fileList('.').forEach(function (val) {
      fs.removeSync(val);
    });

    //removes spaces from project name and lowercase for url
    const cleanStr = (val) => val.replace(/\s/g, '-').toLowerCase();
    const projectURL = cleanStr(answers.gitPROJECTNAME);
    const libraryURL = cleanStr(answers.libraryName);
    //babelrc
    require('./generate-files/babelrc.generate.js')({
      dir: DIR,
      babelNodeTarget: answers.babelNodeTarget,
      babelWebTarget: answers.babelWebTarget,
      target: answers.target
    });
    //contributing
    require('./generate-files/contributing.generate.js')({
      dir: DIR,
      gitUSERNAME: answers.gitUSERNAME,
      gitPROJECTNAME: projectURL,
      NPMorYARN: answers.NPMorYARN[0],
      commitizen: answers.commitizen
    });
    //inject files
    const files = [];
    if (answers.bumpedrc) { files.push('.bumpedrc'); }
    if (answers.changelog) { files.push('CHANGELOG.md'); }
    if (answers.commitizen) { files.push('.cz-config.js'); }
    if (answers.eslintrc) { files.push('.eslintrc.js'); }
    if (answers.gitattributes) { files.push('.gitattributes'); }
    if (answers.gitignore) { files.push('.gitignore'); }
    if (answers.npmignore) { files.push('.npmignore'); }
    if (answers.tests) { files.push('__tests__'); }
    if (answers.wercker) { files.push('wercker.yml'); }
    require('./generate-files/inject.generate.js')({
      dir: DIR,
      files: files
    });
    //.github
    require('./generate-files/github.generate.js')({
      dir: DIR,
      gitPROJECTNAME: projectURL
    });
    //license
    require('./generate-files/license.generate.js')({
      dir: DIR,
      gitUSERNAME: answers.gitUSERNAME,
      gitPROJECTNAME: projectURL,
      authorName: answers.authorName
    });
    //always config package.json
    require('./generate-files/package.json.generate.js')({
      dir: DIR,
      NPMorYARN: answers.NPMorYARN[0],
      libraryName: libraryURL,
      libraryDescription: answers.libraryDescription,
      authorName: answers.authorName,
      gitUSERNAME: answers.gitUSERNAME,
      gitPROJECTNAME: projectURL,
      tests: answers.tests,
      bumpedrc: answers.bumpedrc,
      commitizen: answers.commitizen
    });
    //readme
    if (answers.readme) {
      require('./generate-files/readme.generate.js')({
        dir: DIR,
        gitPROJECTNAME: answers.gitPROJECTNAME
      });
    }
    //gen webpack config
    require('./generate-files/webpack.generate.js')({
      dir: DIR,
      libraryName: libraryURL,
      target: answers.target
    });
    //zappr
    if (answers.zappr) {
      require('./generate-files/zappr.generate.js')({
        dir: DIR,
        gitUSERNAME: answers.gitUSERNAME
      });
    }

    //create lib/index.js
    fs.ensureFileSync(path.resolve(process.cwd(), 'lib/index.js'));
    //delete old node_modules
    fs.removeSync(path.resolve(process.cwd(), 'node_modules'));
    //delete yarn.lock
    fs.removeSync(path.resolve(process.cwd(), 'yarn.lock'));
    if (answers.git) {
      //deletes old .git dir
      fs.removeSync(path.resolve(process.cwd(), '.git'));
    }
    if (answers.removeSelf) {
      //remove self
      fs.removeSync(path.resolve(process.cwd(), '__scripts__/setup'));
    }
  }
});


