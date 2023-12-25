getting start
### Eslintの設定
- yarn add eslint --dev
- .eslintrc.jsonの作成
- yarn create @eslint/config
- yarn add --dev eslint-config-airbnb-typescript

### Prettierのインストール

- yarn add --dev prettier
- yarn --dev add eslint-config-prettier   
- .prettierrc.json ファイルの作成（手動）

```
.prettierrc.json

{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "useTabs": false
}
```
- .vscode/settings.json ファイルの作成（手動）

```
{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
}
```






