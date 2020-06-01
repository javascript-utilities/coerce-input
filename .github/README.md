# Coerce
[heading__top]:
  #coerce
  "&#x2B06; Coerces values into JavaScript object types where available"


Coerces values into JavaScript object types where available

## [![Byte size of Coerce][badge__master__coerce__source_code]][coerce__master__source_code] [![Open Issues][badge__issues__coerce]][issues__coerce] [![Open Pull Requests][badge__pull_requests__coerce]][pull_requests__coerce] [![Latest commits][badge__commits__coerce__master]][commits__coerce__master] [![Coerce Demo][badge__gh_pages__coerce]][gh_pages__coerce]


------


- [:arrow_up: Top of Document][heading__top]

- [:building_construction: Requirements][heading__requirements]

- [:zap: Quick Start][heading__quick_start]

  - [:memo: Edit Your ReadMe File][heading__your_readme_file]
  - [:floppy_disk: Commit and Push][heading__commit_and_push]
  - [&#x1F9F0; Usage][heading__usage]

- [&#x1F5D2; Notes][heading__notes]

- [:card_index: Attribution][heading__attribution]

- [:balance_scale: Licensing][heading__license]


------



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


NodeJS development dependencies may be installed via NPM...


```Bash
npm install
```


> Note NPM is only required if adding features and/or fixing bugs, ie. there are **no** NPM based dependencies for utilizing this repository within other projects.


___


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


For projects on GitHub Pages, this repository encourages the use of Git Submodules to track dependencies


**Bash Variables**


```Bash
_module_name='coerce'
_module_https_url="https://github.com/javascript-utilities/coerce.git"
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
:heavy_plus_sign: Adds `javascript-utilities/coerce#1` submodule



**Additions**


- `.gitmodules`, tracks submodules AKA Git within Git _fanciness_

- `README.md`, updates installation and updating guidance

- `_modules_/coerce`, Coerces values into JavaScript object types where available
EOF


git push origin gh-pages
```


**:tada: Excellent :tada:** your project is now ready to begin unitizing code from this repository!


------


### Usage
[heading__usage]:
  #usage
  "&#x1F9F0;"


> Note, there are [![Coerce Demo][badge__gh_pages__coerce]][gh_pages__coerce] hosted by GitHub pages, the source code of which is available within the [`gh-pages`][coerce__gh_pages__source_code] branch of this repository.


**`index.html`**


```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="assets/js/modules/coerce/coerce.js" differ></script>
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
  const coerced_value = Coerce(client_input);
  const client_text_output = document.getElementById('client__text--output');
  const output_list = [ `typeof -> ${typeof coerced_value}` ];

  // Build pretty formatted output
  switch (typeof coerced_value) {
    case "string":
      if (coerced_value.length === 0) {
        output_list.push('<empty string>');
      } else {
        output_list.push(`"${coerced_value.replace(/"/g, '\\"')}"`);
      }
      break;

    case "object":
      if (Array.isArray(coerced_value)) {
        output_list.push(`Array [ ${coerced_value} ]`);
      } else {
        if (Object.keys(coerced_value).length === 0) {
          output_list.push('Object {  }');
        } else {
          output_list.push('Object {');
          Object.entries(coerced_value).reduce((accumulator, [key, value], index, array) => {
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

    default:
      output_list.push(coerced_value);
  }

  console.log(coerced_value);
  client_text_output.innerText = output_list.join('\n');
};


window.addEventListener('load', () => {
  const client_text_input = document.getElementById('client__text--input');
  client_text_input.addEventListener('input', text_input__callback);
});
```


___


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


This repository may not be feature complete and/or fully functional, Pull Requests that add features or fix bugs are certainly welcomed.


**Developer Notes**


- Install developer dependencies via `npm install`

- Edits to {Type,Java}Script files should be directed to files within the `ts/` sub directory

- Changes can be transpiled via `npm run ts-build`

- Tests can be preformed via `npm run ci-test`


___


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)

- [Medium -- Writing unit tests in TypeScript](https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40)


___


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


[badge__commits__coerce__master]:
  https://img.shields.io/github/last-commit/javascript-utilities/coerce/master.svg

[commits__coerce__master]:
  https://github.com/javascript-utilities/coerce/commits/master
  "&#x1F4DD; History of changes on this branch"


[coerce__community]:
  https://github.com/javascript-utilities/coerce/community
  "&#x1F331; Dedicated to functioning code"

[coerce__gh_pages]:
  https://github.com/javascript-utilities/coerce/tree/
  "Source code examples hosted thanks to GitHub Pages!"

[badge__gh_pages__coerce]:
  https://img.shields.io/website/https/javascript-utilities.github.io/coerce/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[gh_pages__coerce]:
  https://javascript-utilities.github.io/coerce/index.html
  "&#x1F52C; Check the example collection tests"

[coerce__gh_pages__source_code]:
  https://github.com/javascript-utilities/coerce/tree/gh-pages
  "Source code gh-pages branch for live demos"

[issues__coerce]:
  https://github.com/javascript-utilities/coerce/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[pull_requests__coerce]:
  https://github.com/javascript-utilities/coerce/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[coerce__master__source_code]:
  https://github.com/javascript-utilities/coerce/
  "&#x2328; Project source!"

[badge__issues__coerce]:
  https://img.shields.io/github/issues/javascript-utilities/coerce.svg

[badge__pull_requests__coerce]:
  https://img.shields.io/github/issues-pr/javascript-utilities/coerce.svg

[badge__master__coerce__source_code]:
  https://img.shields.io/github/repo-size/javascript-utilities/coerce
