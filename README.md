# Instructions

Download or clone this repository to your computer. 
Open a terminal and follow the instructions below to create a new React project with : 
  - Vite
  - TailwindCSS
  - Prettier
  - ESLint
  - React Router Dom
  - React Icons

## Install pnpm or use npm or yarn
```bash
> npm install -g pnpm
```

## Install dependencies
- _With pnpm_ :
  ```bash
  > pnpm install
  ```
- _With npm_ :
  ```bash
  > npm install
  ```
- _With yarn_ :
  ```bash
  > yarn install
  ```

  **Or you can use the following instructions to create a new React project from scratch.**

## 1) Create new React project and follow instructions
```bash	
> pnpm create vite
```

Follow the vite's instructions to create a new React project.

**Suggestions:**
- Give a project name.
- Choose "react" for the framework.
- Choose "javascript-swr" or "typescript-swr" for the language.

### 1.1) Before make install
**Initialize Git**
```bash	
> git init
```

## 2) Install dependencies
```bash
> pnpm add -D prettier prettier-config-standard eslint eslint-plugin-prettier eslint-config-standard eslint-config-prettier eslint-plugin-simple-import-sort eslint-plugin-unused-imports eslint-plugin-jsx-a11y tailwindcss prettier-plugin-tailwindcss clsx class-variance-authority tailwind-merge postcss autoprefixer react-icons
```

```bash
> pnpm add react-router-dom
```

## 3) Open VSCode
```bash
> code .
```

## 4) Create _.prettierrc_ file
```json
{
  "jsxSingleQuote": true,
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 160,
  "bracketSameLine": false,
  "useTabs": false,
  "arrowParens": "avoid",
  "endOfLine": "auto",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## 5) Create _.eslintrc.cjs_ file
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest', ecmaFeatures: {
      'jsx': true
    }, sourceType: 'module'
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-use-before-define': ['warn'],
    'no-unused-vars': ['warn', {
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
      'caughtErrorsIgnorePattern': '^_'
    }],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'default-case': 'error',
    'camelcase': 'warn',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-console': 'warn',
    'no-misleading-character-class': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal-escape': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'symbol-description': 'error',
    'no-unreachable-loop': 'error',
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': [
      'warn',
      {
        'endOfLine': 'auto',
        'singleQuote': true
      }
    ]
  },
}
```

## 6) Create _tailwind.config.js_ and _postcss.config.js_ files
```bash
> pnpm tailwindcss init -p
```

### 7) Edit _tailwind.config.js_
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 8) Edit _index.css_
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
**Note:** Remove all content from index.css and add the above code.

## 9) Clean up _App.jsx_ and _index.jsx_
Remove all content from App.jsx and index.jsx.
Remove all unnecessary files like _app.css_, _react.svg_ and all others files or folders you don't need.

## 10) Create a new repository on GitHub and follow the instructions below
```bash
> git remote add origin <your_repository.git>
> git branch -M main
```

## 11) Create your first Commit
```bash
> git add .
> git commit -m "Initial commit"
```

## 12) Push to GitHub
```bash
> git push -u origin main
```

## 13) You are ready to code !



