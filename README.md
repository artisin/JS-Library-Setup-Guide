# JavaScript/NPM Library Setup Guide and Boilerplate Script
[![wercker status](https://app.wercker.com/status/6b74cb8e232cae0b35d3b27bf034d9fc/s/master "wercker status")](https://app.wercker.com/project/byKey/6b74cb8e232cae0b35d3b27bf034d9fc)

## Description

You know what confused me the most when I first started developing JavaScript libraries? The how's, why's, and what's of setting up the dot-files, build/auxiliary tools, and configuring all the separate pieces to work together. I looked high and low for a guide like this, but alas my search was fruitless, so I took the time to create one. Hopefully this guide and automatic setup will help you setup your project in a jiffy to you don't have to spend all the time I did.

The current structure and setup is a culmination of three years of trial and error. And I can say with confidence that it's a pretty good template to start with. It also includes useful auxiliary tools to help manage and support your library. Plus there's a script that will set everything up for you automatically. Although, at the same time, I break down each component in detail as to what it does and how to use it below.

If you want to view some example repositories that utilize this project structure you can checkout any repository in [ctr-lang](https://github.com/ctr-lang).

---

## Table of Contents

+ [Initial Setup](#initial-setup)
+ [Commands](#commands)
+ [Root Dot-Files](#root-dot-files)
+ [Folders](#folders)
+ [Pull Requests](#pull-requests)
+ [How to Release a New Version](#how-to-release-a-new-version)
+ [Tag and Publish](#tag-and-publish)
+ [Auxiliary Tools](#auxiliary-tools)


---

## Initial Setup

Either you can set things up manually or automatically. I recommend the automatic route in which all you need to do is run the following command:

```bash
   npm start
```

You'll be prompted to answer a series of questions and based on your answers it will configure the files and their contents for you.

---

## Commands

+ `npm run test` -> Runs the tests in the `__test__` directory
+ `npm run dev` -> For development of your library
+ `npm run build` -> For bulding your library for publish/release
+ `release:major` -> Preps for a major release. Refer to the ["How to Release a New Version"]((#how-to-release-a-new-version)) section below
+ `release:minor` -> Preps for a minor release. Refer to the ["How to Release a New Version"]((#how-to-release-a-new-version)) section below
+ `release:patch` -> Preps for a patch release. Refer to the ["How to Release a New Version"]((#how-to-release-a-new-version)) section below

---

## Root Dot-Files

### `.babelrc`

This file is the run-time configuration for the [babel-loader](https://github.com/babel/babel-loader) which is used in conjunction with [webpack](https://webpack.js.org). Essentially, it tells [Babel](http://babeljs.io/) how to compile your JavaScript, although, we utilize the [babel-preset-env](https://github.com/babel/babel-preset-env) which:

> Automatically determines the Babel plugins and polyfills you need based on your supported environments.

Here's a example configuration that is also the default configuration. It targets node version `4` and the `last 2 versions` of all major browsers.

```json
{
  "presets": [
    ["env", {
      "targets": {
        "node": "4",
        "browsers": ["last 2 versions"]
      }
    }]
  ]
}
```


To determine your environment and the corresponding support for ECMAScript features you can use the [`compat-table`](https://kangax.github.io/compat-table/es6/). There's also plethora of options and configures that you can read about in the [repository](https://github.com/babel/babel-preset-env).


### `.bumpedrc`

This file is the run-time configuration for [Bumped](https://www.npmjs.com/package/bumped) which: 

> Is a release system that makes it easy to perform actions before and after releasing a new version of your software.

The rule of thumb in all software development is to track your development and changes and release using a schema such as [Semantic Versioning](http://semver.org/). I'll run through a quick example as to why this is important. Let's say you make some major changes to your API and these changes create breaking changes. That is changes that will break a users setup if they upgrade without making the correct changes to their code/setup.

After you make these changes you will need to release a new version of your library both to Github and NPM. And once you do so other developers will come visit your repository to see what changed and what they need to change in order to upgrade to the next version. If you don't do this users of your library will upgrade unknowingly and their build will break and they won't be happy. Admittedly, this task of business can be a pain in the butt, but it’s a MUST and Bumped makes this process suck a bit less.


### `.cz-config.js`

This file is for setting up a customizable [commitizen](http://commitizen.github.io/cz-cli/) cli. If you're unfamiliar with commitizen it provides:

> Simple commit conventions for internet citizens.

Using commitizen depends largely on personal preference and during initial/early development I typically don't use it. However, once you release your project out into the wild it can be advantageous to have commit conventions not for you, but for others. In addition, commitizen is almost mandatory if you wish to use Zapper and it's commit message tests.


### `.env-cmdrc`

This file set environment variables for the npm scripts, [env-cmd](https://www.npmjs.com/package/env-cmd) is:

> A simple node program for executing commands using an environment from an env file.

Using environment variables makes your life ten times easier and env-cmdrc makes working with them a breeze in the park.

### `.editorconfig`

This file set the rules for [EditorConfig](http://editorconfig.org/) which helps:

> Developers define and maintain consistent coding styles between different editors and IDEs.

For example, the current `.editorconfig` stipulates that there should always be a extra space at the end of every files. And this extra space will be added for you automatically if you forget to do so upon saving your file. There's a whole list of rules you can employ and you can specify separate rules for different file types, but for the most part the current `.editorconfig` is pretty bare bones.


### `.eslintrc.js`

This file is for the rule configuration of [ESLint](http://eslint.org/) which is a:

> Pluggable linting utility for JavaScript and JSX.

If you're unfamiliar with linters you are missing out in life. I'll give you the skinny on linters. They're tools that set style rules for your code like always using semicolons as well as catch common errors. The current `.eslintrc.js` is highly configurable and all the defined rules have comments next to them to explain what they do. Alternatively, you could use a big-name style guide like [Airbnb](http://airbnb.io/javascript/), but it's completely up to you.

I should note, some people use linting tests that lint all the files to make sure there are no "linting" errors, although, I believe this is actually a anti-pattern that causes more harm than good. In my mind you should always _try_ to abide by the rules but never conform to the rules just for the sake of rules.


### `.gitattributes`

The `.gitattributes` file allows you to:

> Ensure consistent git settings across machines.

Meh, I have mixed feelings about this file since it does not do much for me personally but I'll let you decide if you want to include it in your project or not. You can read more about it [here](https://git-scm.com/docs/gitattributes).


### `.gitignore`

The `.gitignore` file allows you to tell git to:

> Intentionally untracked files.

This is where you would specify files/folders that you don't want git to track. Be it private files, API keys, etc, although you can read more about it [here](https://git-scm.com/docs/gitignore). The current `.gitignore` file has a whole gambit of default settings that should cover most use cases.


### `.npmignore`

The `.npmignore` file allows you to tell NPM to keep:

> Files out of your package.

When you publish your package to NPM you don't want to or need to publish everything and this is what the `.npmignore` file is for. It's the same things as `.gitignore` file, but just for NPM. You can read more about it [here](https://docs.npmjs.com/misc/developers), and like the `.gitignore` file, the `.npmignore` file has a whole gambit of default setting that should cover most use cases.


### `.zappr.yaml`

The `.zappr.yaml` file sets the configuration setting for Zappr which is a:

> Github integration built to enhance your project workflow.

Zappr has some fantastic documentation that you can/should read [here](https://zappr.readthedocs.io/en/latest/). But in short it helps with, code review, compliance, and various bottlenecks.



---

## Folders


### `.github/`

The `.github` folder contains templates for both pull requests and issues. You can read more about the `.github` templates files [here](https://help.github.com/articles/creating-a-pull-request-template-for-your-repository/). But the gist is they help set a uniformity for pull requests and issues.

### `__scripts__/`

The `__scripts__` folder contains various build scripts that are typically initialized by a `package.json` command. For example, let's say you need to make alterations to various HTML files post build like removing comments, minifying, class additions, etc, you would create said scripts in the `__scripts__` folder. Conversely, you may have custom development or setup scripts — this is the place where you should place them. So it should be obvious that the automated scripts for this project resides in the `__scripts__` folder.


### `__tests__/`

Should be self-explanatory. This is where you place all your tests. The `__tests__` setup defaults to [mocha](https://mochajs.org/) and [Should.js](https://shouldjs.github.io/) but this can be easily changed.


### `dist/`

Short for distribution. This is the build folder for webpack. It will output all builds of your project whether that be node, browser, browser-minified, or all three. Essentially these are the file(s) the end user will use.


### `lib/`

Short for library. This is the development folder in which you will build your library. During development webpack will watch this folder and recompile your build into the `dist` folder on every alteration/change.



---

## Pull Requests

NOTE: The following directions are the same directions that are in the `CHANGELOG.md` file just with `<XXX>` placeholders.

1. [Fork](https://help.github.com/fork-a-repo/) the repository.

   ```bash
   git clone https://github.com/<your-username>/<gitPROJECTNAME>.git
   cd <gitPROJECTNAME>
   git remote add upstream https://github.com/<gitUSERNAME>/<gitPROJECTNAME>.git
   ```

2. Link `<gitPROJECTNAME>`, to symlink the package folder during development.

   ```bash
   yarn run link
   ```

3. Install the dependencies. Make sure you have [yarn](https://yarnpkg.com) [installed](https://yarnpkg.com/en/docs/install).

   ```bash
   yarn install
   ```

4. Create a new branch to contain your feature, change, or fix.

   ```bash
   git checkout -b <topic-branch-name>
   ```

5. Commit your changes in logical chunks.
    + To keep commits uniform, this project uses [commitizen](http://commitizen.github.io/cz-cli/), but don't worry if you've never heard about commitizen or don't know how to use it. Everything is pre-configured and ready for you to rock 'n' roll out of the box. Just follow these simple steps:
        1. Make your update/change/fix
        2. Add your changes `git add .`
        3. Run: `npm run commit` - An interactive command prompt will appear and lead you step-by-step through the whole process. It's easy peasy lemon squeezy so don't worry about a thing.
    + If commitizen does not work or for some extraneous reason you wish not to use it your commit must follow the [angular commit](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) format: `<type>(<scope>): <subject>`. Otherwise, your pull request will fail during approval, but it’s highly encouraged you use `npm run commit` to make everyone's life just a bit easier.

6. Test changes and/or write test(s) to validate feature, change, or fix.

   ```bash
   npm run test
   ```

7. Locally merge (or rebase) the upstream development branch into your topic branch.

   ```bash
   git pull [--rebase] upstream master
   ```

8. Push your topic branch up to your fork.

   ```bash
   git push origin <topic-branch-name>
   ```

9. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description against the `master` branch. Suggestions, changes, or improvements may be required for your changes to be merged, but small pull requests should be accepted quickly. Ideally, your pull request meets the four pillars of quality:
    1. Update/change/fix has test(s)
    2. Follows the existing code style
    3. Has decent commit message(s)
    4. Commit, and code comes with a smile



---

## How to Release a New Version

__Preconfig/Setup__

Before you release a new version make sure you are familiar with [Semantic Versioning](http://semver.org/) so you know what type of release you need to make. Once your familiar with Semantic Versioning you will want to create a new issue titled `Release: <X.X.X>` and create a new corresponding branch that references the issue number such as `pr-#<RELEASE-ISSUE-NUMBER>`. 

__Bumped Command__

Once you're on the new branch you will want to run one of the following commands that corresponds with the release version.

```bash
   # X.0.0
   yarn run release:major
   # 0.X.0
   yarn run release:minor
   # 0.0.X
   yarn run release:patch
```

The command does the following:

1. Runs your changes against your tests via `npm test`
2. Bumps the `package.json` version
3. Adds and commits `package.json`
   + Commit message: `release(<X.X.X>): Release: <X.X.X>`
4. Logs the changes (the commit history) to `CHANGELOG.md`
5. Adds and amends the previous commit with the `CHANGELOG.md` with the same commit message

__Post-Bumped Alterations__

After the Bumped command finishes you'll want remove any fruitless commits from the `CHANGELOG.md`. Alternatively, you can keep it how it is, but typically I remove commits that are not worthy like a commit that `"Fixes sentence fragment"`. If you do make any changes you will need to amend those changes.

```bash
   git add CHANGELOG.md
   # Commits the changes but does not change the commit message
   git commit --amend --no-edit
```

__Push & Merge__

At this point you need to push the release branch to the repository.

```bash
   # Pushes the top of the current branch
   git push origin HEAD
```

1. Go to the repository on Github
2. You should see a yellow prompt box with a green button labeled "Compare & Pull Request". Click that button and it will take you to a new pull request page.
3. The title should be pre-filled with the commit message, but you will want to use the textarea to make a commit message that closes the release issue.
    * In the textarea leave a comment that says: `CLOSES #<RELEASE-ISSUE-NUMBER>`
    * The reason you do this is because Github then automatically attaches and close issues the issue otherwise you must do this yourself. And if you want to learn more about this functionality you can read about it [here](https://help.github.com/articles/closing-issues-via-commit-messages/). 
4. Now click the green button labeled "Create pull request" which will take you to the finial pull request page.
5. Once your pull request passes any and all checks you have in place such as testing in the cloud you will want to click the green button labeled "Merge pull request".
6. Boom, done! Now head back to your code.


__Tag and Publish__

After merging the release branch on Github you want to  checkout the `master` branch and update the local `master` branch with the merged changes:

```bash
   git checkout master
   git pull
```

Now you want to "Tag" your release. You can do this using the command line, but again, I recommend you use Github. On Github you should see right below the repository description a link/text that is labeled "releases" which is next to "branches" on the left and "contributors" on the right. Click the "releases" label and it should bring you to a new page and you will want to click the button labeled "Create a new release". This again will bring you to a new page to draft your release. The following is the input labels and their respective outputs:

+ Tag version: `<X.X.X>`
+ Release title: `<X.X.X>` (some people use descriptor titles I don't)
+ Describe this release: Copy the release text from the `CHANGELOG.md` file and paste it here.
+ Click the green "Publish release" button and then your done

The finial step is to update the NPM package that is if you have your library on NPM. To do so simply run:

```bash
   npm publish
```

---

## Auxiliary Tools

Auxiliary tools are tools that integrate into Github, but are provided by an outside service. All these tools help you better organize, manage, and streamline your project, and while these tools are completely optional I do recommend them.

+ [Waffle.io](https://waffle.io/)
    * Description: A [kanban board](https://en.wikipedia.org/wiki/Kanban_board) for smart and simple project management. It automatically tracks your work on various issues and pull requests.
    * Setup:
        1. Go to [Waffle.io](https://waffle.io/) and sign-up
        2. Link your Github account
        3. Link your Github project
+ [Zappr](https://zappr.opensource.zalan.do)
    * Description: A bot that enforces guidelines for your GitHub repository and automatically checks pull requests before they are merged.
    * Setup:
        1. Go to [Zappr](https://zappr.opensource.zalan.do/login) and sign-up
        2. Link your Github account
        3. Link your Github project
+ [CLA Assistant](https://cla-assistant.io/)
    * Description: A bot that ensures contributors sign a CLA for the work they contribute. Typically this is only needed if you're working on a large project that you may want to monetize or change the license in the future. The jury is quite literally out on CLA's, but in my mind it's better to be safe then sorry. Plus  the CLA assistant makes signing a CLA a trivial matter.
    * Setup:
        1. Go to [CLA Assistant](https://cla-assistant.io/) and sign-up
        2. Draft a CLA, you can find templates online or use something similar to Githubs [CLA](https://cla.github.com/)
        3. Select the project/organization
        4. That's it. It creates the necessary web-hooks in Github and you are set.

---

Best, te
