# Finder-User

## Techs


  [![My Skills](https://skillicons.dev/icons?i=html,css,nodejs,ts,react,vite)](https://skillicons.dev)


  # :hammer: Project features

- `functionality `:
- Responsive.
- Pesquise seu usuario do guithub
- Vejas seus melhores projetos
  
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=%20finished&color=GREEN&style=for-the-badge)

### Print
  <img src="https://github.com/DocCaio/Finder-user/blob/main/src/assets/screenshot.png" alt="Minha Figura">

  ```mk
   npm create vite@latest
   npm i react-router-dom react-icons
   npm run dev
   npm update react-icons
  

```


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
