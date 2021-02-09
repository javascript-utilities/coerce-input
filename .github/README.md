# Coerce Input
[heading__top]:
  #coerce-input
  "&#x2B06; Coerces values into JavaScript object types where available"


Coerces values into JavaScript object types where available


## [![Byte size of Coerce][badge__master__coerce_input__source_code]][coerce_input__master__source_code] [![Open Issues][badge__issues__coerce_input]][issues__coerce_input] [![Open Pull Requests][badge__pull_requests__coerce_input]][pull_requests__coerce_input] [![Build Test Status][badge__travis_ci__coerce_input]][travis_ci__coerce_input] [![Latest commits][badge__commits__coerce_input__master]][commits__coerce_input__master] [![Coerce Demo][badge__gh_pages__coerce_input]][gh_pages__coerce_input]


---


- [:arrow_up: Top of Document][heading__top]

- [:building_construction: Requirements][heading__requirements]

- [:zap: Quick Start][heading__quick_start]
  - [:memo: Edit Your ReadMe File][heading__your_readme_file]
  - [:floppy_disk: Commit and Push][heading__commit_and_push]

- [&#x1F9F0; Usage][heading__usage]
  - [NodeJS Examples][heading__nodejs_example]
  - [Web Application Example][heading__web_application_example]

- [&#x1F5D2; Notes][heading__notes]

- [&#x1F4C8; Contributing][heading__contributing]
  - [&#x1F531; Forking][heading__forking]
  - [&#x1F4B1; Sponsor][heading__sponsor]

- [:card_index: Attribution][heading__attribution]

- [:balance_scale: Licensing][heading__license]


---



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


NodeJS development dependencies may be installed via NPM...


```Bash
npm install
```


> Note NPM is only required if adding features and/or fixing bugs, ie. there are **no** NPM based dependencies for utilizing this repository within other projects.


______


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


NodeJS projects may use `npm` to install `coerce-input` as a dependency...


```Bash
npm install coerce-input
```


... or as a development dependency via `--save-dev` command-line flag...


```Bash
npm install --save-dev coerce-input
```


... Check [NodeJS Examples][heading__nodejs_example] for details on how to import this project within your own source code.


---

For projects on GitHub Pages, this repository encourages the use of Git Submodules to track dependencies


**Bash Variables**


```Bash
_module_name='coerce-input'
_module_https_url="https://github.com/javascript-utilities/coerce-input.git"
_module_base_dir='assets/js/modules'
_module_path="${_module_base_dir}/${_module_name}"
```


**Bash Submodule Commands**


```Bash
cd "<your-git-project-path>"

git checkout gh-pages
mkdir -vp "${_module_base_dir}"

git submodule add\
 -b master --name "${_module_name}"\
 "${_module_https_url}" "${_module_path}"
```


### Your ReadMe File
[heading__your_readme_file]:
  #your-readme-file
  "&#x1F4DD; Suggested additions for your ReadMe.md file so everyone has a good time with submodules"


Suggested additions for your _`ReadMe.md`_ file so everyone has a good time with submodules


```MarkDown
Clone with the following to avoid incomplete downloads


    git clone --recurse-submodules <url-for-your-project>


Update/upgrade submodules via


    git submodule update --init --merge --recursive
```


### Commit and Push
[heading__commit_and_push]:
  #commit-and-push
  "&#x1F4BE; It may be just this easy..."


```Bash
git add .gitmodules
git add "${_module_path}"


## Add any changed files too


git commit -F- <<'EOF'
:heavy_plus_sign: Adds `javascript-utilities/coerce-input#1` submodule



**Additions**


- `.gitmodules`, tracks submodules AKA Git within Git _fanciness_

- `README.md`, updates installation and updating guidance

- `_modules_/coerce-input`, Coerces values into JavaScript object types where available
EOF


git push origin gh-pages
```


**:tada: Excellent :tada:** your project is now ready to begin unitizing code from this repository!


---


## Usage
[heading__usage]:
  #usage
  "&#x1F9F0; Examples on how to utilize this repository"


> Examples on how to utilize this repository


---


### NodeJS Example
[heading__nodejs_example]: #nodejs-example


**`example.js`**


```JavaScript
#/usr/bin/env node

'use strict';

const { Coerce_Input } = require('coerce-input');

const coerced_value = Coerce_Input('[42, "spam"]')

console.log({coerced_value});
//> { coerced_value: [ 42, 'spam' ] }

console.log(typeof coerced_value[0]);
//> number
```


---


### Web Application Example
[heading__web_application_example]: #web-application-example


> Note, there are [![Coerce Demo][badge__gh_pages__coerce_input]][gh_pages__coerce_input] hosted by GitHub pages, the source code of which is available within the [`gh-pages`][coerce_input__gh_pages__source_code] branch of this repository.


**`index.html`**


```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="assets/js/modules/coerce-input/coerce-input.js" differ></script>
    <script type="text/javascript" src="assets/js/index.js" differ></script>
    <title>Test Value Coercion</title>
  </head>
  <body>
    <input type="text" id="client__text--input" value="">
    <pre id="client__text--output"></pre>
  </body>
</html>
```


**`index.js`**


```JavaScript
const text_input__callback = (event) => {
  const client_input = event.target.value;
  const coerce_input_value = Coerce_Input(client_input);
  const client_text_output = document.getElementById('client__text--output');
  const output_list = [ `typeof -> ${typeof coerce_input_value}` ];

  // Build pretty formatted output
  switch (typeof coerce_input_value) {
    case "string": {
      if (coerce_input_value.length === 0) {
        output_list.push('<empty string>');
      } else {
        output_list.push(`"${coerce_input_value.replace(/"/g, '\"')}"`);
      }
      break;
    }

    case "object": {
      if (Array.isArray(coerce_input_value)) {
        output_list.push(`Array [ ${coerce_input_value} ]`);
      } else {
        if (Object.keys(coerce_input_value).length === 0) {
          output_list.push('Object {  }');
        } else {
          output_list.push('Object {');
          Object.entries(coerce_input_value).reduce((accumulator, [key, value], index, array) => {
            let entry = `  ${key}: ${value}`;
            if (index < array.length - 1) {
              entry += ',';
            }
            accumulator.push(entry);
            return accumulator;
          }, output_list);
          output_list.push('}');
        }
      }
      break;
    }

    default:
      output_list.push(coerce_input_value);
  }

  console.log(coerce_input_value);
  client_text_output.innerText = output_list.join('\n');
};


window.addEventListener('load', () => {
  const client_text_input = document.getElementById('client__text--input');
  client_text_input.addEventListener('input', text_input__callback);
});
```


______


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


**Warning** if upgrading from `v0.0.1` to `v0.1.0` (or greater) then beware that this repository, and source code files, have been renamed from `coerce` to `coerce-input`, and exported function has been renamed from `Coerce` to `Coerce_Input`


This repository may not be feature complete and/or fully functional, Pull Requests that add features or fix bugs are certainly welcomed.


**Developer Notes**


- Install developer dependencies via `npm install`

- Edits to {Type,Java}Script files should be directed to files within the `ts/` sub directory

- Changes can be transpiled via `npm run ts-build`

- Tests can be preformed via `npm run ci-test`


______


## Contributing
[heading__contributing]:
  #contributing
  "&#x1F4C8; Options for contributing to coerce-input and javascript-utilities"


Options for contributing to coerce-input and javascript-utilities


---


### Forking
[heading__forking]:
  #forking
  "&#x1F531; Tips for forking coerce-input"


Start making a [Fork][iterator_cascade_callbacks__fork_it] of this repository to an account that you have write permissions for.


- Add remote for fork URL. The URL syntax is _`git@github.com:<NAME>/<REPO>.git`_...


```Bash
cd ~/git/hub/javascript-utilities/coerce-input

git remote add fork git@github.com:<NAME>/coerce-input.git
```


- Commit your changes and push to your fork, eg. to fix an issue...


```Bash
cd ~/git/hub/javascript-utilities/coerce-input


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork main
```


> Note, the `-u` option may be used to set `fork` as the default remote, eg. _`git push -u fork main`_ however, this will also default the `fork` remote for pulling from too! Meaning that pulling updates from `origin` must be done explicitly, eg. _`git pull origin main`_


- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_


> Note; to decrease the chances of your Pull Request needing modifications before being accepted, please check the [dot-github](https://github.com/javascript-utilities/.github) repository for detailed contributing guidelines.


---


### Sponsor
  [heading__sponsor]:
  #sponsor
  "&#x1F4B1; Methods for financially supporting javascript-utilities that maintains coerce-input"


Thanks for even considering it!


Via Liberapay you may <sub>[![sponsor__shields_io__liberapay]][sponsor__link__liberapay]</sub> on a repeating basis.


Regardless of if you're able to financially support projects such as coerce-input that javascript-utilities maintains, please consider sharing projects that are useful with others, because one of the goals of maintaining Open Source repositories is to provide value to the community.


______


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)

- [Medium -- Writing unit tests in TypeScript](https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40)


______


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"


```
Documentation on coercing values into JavaScript object types where available
Copyright (C) 2020 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```


For further details review full length version of [AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"


[badge__commits__coerce_input__master]:
  https://img.shields.io/github/last-commit/javascript-utilities/coerce-input/master.svg

[commits__coerce_input__master]:
  https://github.com/javascript-utilities/coerce-input/commits/master
  "&#x1F4DD; History of changes on this branch"


[coerce_input__community]:
  https://github.com/javascript-utilities/coerce-input/community
  "&#x1F331; Dedicated to functioning code"

[coerce_input__gh_pages]:
  https://github.com/javascript-utilities/coerce-input/tree/
  "Source code examples hosted thanks to GitHub Pages!"

[badge__gh_pages__coerce_input]:
  https://img.shields.io/website/https/javascript-utilities.github.io/coerce-input/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[gh_pages__coerce_input]:
  https://javascript-utilities.github.io/coerce-input/index.html
  "&#x1F52C; Check the example collection tests"

[coerce_input__gh_pages__source_code]:
  https://github.com/javascript-utilities/coerce-input/tree/gh-pages
  "Source code gh-pages branch for live demos"

[issues__coerce_input]:
  https://github.com/javascript-utilities/coerce-input/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[pull_requests__coerce_input]:
  https://github.com/javascript-utilities/coerce-input/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[coerce_input__master__source_code]:
  https://github.com/javascript-utilities/coerce-input/
  "&#x2328; Project source!"

[badge__issues__coerce_input]:
  https://img.shields.io/github/issues/javascript-utilities/coerce-input.svg

[badge__pull_requests__coerce_input]:
  https://img.shields.io/github/issues-pr/javascript-utilities/coerce-input.svg

[badge__master__coerce_input__source_code]:
  https://img.shields.io/github/repo-size/javascript-utilities/coerce-input

[badge__travis_ci__coerce_input]:
  https://img.shields.io/travis/javascript-utilities/coerce-input/master.svg

[travis_ci__coerce_input]:
  https://travis-ci.com/javascript-utilities/coerce-input
  "&#x1F6E0; Automated tests with Jest and build logs"


[sponsor__shields_io__liberapay]:
  https://img.shields.io/static/v1?logo=liberapay&label=Sponsor&message=javascript-utilities

[sponsor__link__liberapay]:
  https://liberapay.com/javascript-utilities
  "&#x1F4B1; Sponsor developments and projects that javascript-utilities maintains via Liberapay"

