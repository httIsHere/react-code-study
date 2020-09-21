<!--
 * @Author: your name
 * @Date: 2020-09-18 11:05:50
 * @LastEditTime: 2020-09-18 11:41:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /VirtualDOM/README.md
-->

使用babel单独编译jsx文件

- 安装babel（全局安装可能需要sudo）
  
```bash
yarn add -g @babel/core @babel/cli
```

- @babel/preset-react

```bash
yarn add @babel/preset-react
```

- 编译

```bash
babel --plugins @babel/plugin-transform-react-jsx src --out-dir static
```
---

src/index.jsx 编译结果

```js
"use strict";

function render() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, "Hello World!", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "list-item"
  })));
}
```