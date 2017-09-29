
// const defaultAnswers = {
//   warning: true,
//   authorName: 'test name',
//   NPMorYARN: [ 'yarn' ],
//   libraryName: 'test project',
//   gitUSERNAME: 'tester',
//   gitPROJECTNAME: 'github test name',
//   libraryDescription: 'This is a test',
//   target: [ 'node', 'web' ],
//   babelNodeTarget: '3',
//   babelWebTarget: '3',
//   nvmrc: '8.5.0',
//   readme: true,
//   tests: true,
//   bumpedrc: true,
//   commitizen: true,
//   zappr: true,
//   editorconfig: true,
//   eslintrc: true,
//   gitattributes: true,
//   gitignore: true,
//   npmignore: true,
//   changelog: true,
//   wercker: true,
//   git: true,
//   removeSelf: true
// };

const defaultAnswers = {
  warning: true,
  authorName: 'Joe',
  NPMorYARN: [ 'yarn' ],
  libraryName: 'project-name',
  gitUSERNAME: 'user',
  gitPROJECTNAME: 'project-name',
  libraryDescription: 'A build script',
  target: [ 'node' ],
  babelNodeTarget: '4',
  nvmrc: '8.5.0',
  readme: false,
  tests: true,
  bumpedrc: true,
  commitizen: true,
  zappr: true,
  editorconfig: true,
  eslintrc: true,
  gitattributes: true,
  gitignore: true,
  npmignore: true,
  changelog: true,
  wercker: true,
  git: false,
  removeSelf: false
};


const merge = function(src, target) {
  return Object.assign({}, src, target);
};

const noBuildWarning = merge(defaultAnswers, {
  warning: false,
  test: 'Should not build assets'
});

const defaultBuild = merge(defaultAnswers, {
  test: 'Should build basic answers'
});


module.exports = {
  noBuildWarning,
  defaultBuild,
};
