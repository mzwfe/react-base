# 1.废话

因为之前没有使用过react, 这算是学习用的demo, 为了方便接下来学习react而使用的模板, 希望以后常更新(多学习)

# 2.项目结构

相信不用说了, 文件夹还是很清晰的(纯前端的一个骨架)
页面放在views, 路由在router, 状态管理在stores, 组件放在components, 样式放在assets, 模拟数据mock, 布局在layout, 网络请求在service(只是定时器模拟了下网络请求而已)

# 3.实现功能

做了个很简单的登录页, 登陆后有清单页(list) \ 个人信息页(user) \ 尝试编写高阶组件页(father)

router使用的是react-router stores使用的是zustand

也跟着网上的教程做了下路由拦截(/router/RouterBeforeEach.tsx)

# 4.启动!!
npm i

npm run dev

账号: admin, 密码: 888888 (在loginXHR里面写死的hhhh)


# 以下为默认生成的readme

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
