### List of plugin

- prettier
- eslint
- highlite matching tag
- live server
- path intellisense
- terminal
- tralling spaces

### eslint + prettier by airnbn

В каждом проекте

```bash
yarn init -y

yarn add -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-json eslint-plugin-prettier prettier
```

### Configure your .eslintrc.js

```bash
touch .eslintrc.js

```

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-console": "off"
  }
};
```

### Visual Studio Code settings.json

File -> Preferences -> Settings (Ctr + ,)
-> print 'json' -> search and press link 'Edit in settings.json'
-> isert text

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": ["javascript"]
}
```

### test
- create app.js and insert

```js
let a = "abc"
const FIVE = 5
console.log(a)

```

- save file app.js
-  you are will have valid code after save and editing
```js
const a = 'abc';
const FIVE = 5;
console.log(a);
console.log(FIVE);
```
