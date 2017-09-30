const inquirer    = require('inquirer');
const buildScript = require('./build-script');

/**
 * When conditions
 */
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
    type: 'input',
    name: 'nvmrc',
    message: 'Node Version Manager version, .nvmrc?',
    default: '8.5.0',
    when: when.warning
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




/**
 * Init cli to build assets from
 */
const cliInquireInit = function() {
  inquirer.prompt(questions).then(function (answers) {
    //Directory to inject/write files to
    const DIR = '';
    buildScript(DIR, answers);
  });
};



/**
 * Init setup/test runner
 */
const initSetup = function() {
  if (process.env.NODE_ENV === 'production') {
    cliInquireInit();
  }else if (process.env.NODE_ENV === 'test') {
    const testInit = require('./../__tests__/test.run.js');
    testInit(buildScript);
  }
};
initSetup();

