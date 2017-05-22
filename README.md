# isomorphic-redux-forum

![language](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![stars](https://img.shields.io/github/stars/laoqiren/isomorphic-redux-CNode.svg?style=social&label=Star)
![fork](https://img.shields.io/github/forks/laoqiren/isomorphic-redux-CNode.svg?style=social&label=Fork)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()

## About
目前 基于express和mongoose后台，前段@xiyu vue？？？？？

## 用到的技术栈
<ul>

<li>node/express 提供服务</li>

<li>webpack 构建</li>

<li>webpack-isomorphic-tools 处理ssr静态资源</li>

<li>JWTs 前后端分离下的token验证考虑 后期加上用户管理</li>

<li>mongodb/mongoose 提供数据库管理</li>
</ul>



## 运行Demo

### 安装依赖
```
npm install
```
### 配置文件

修改配置文件config.js,指定自己的数据库地址，端口，数据库，用户名和密码

### 编译
```
npm run build
```
### 运行Node server
```
npm run start或者node server/index.js
```

### 访问3000端口

## 开发环境

### 安装依赖

```
npm install
```

### 启动webpack server
```
npm run run-dev-server
```

### 启动express服务器
```
npm run run-server
```
### 访问服务:3000端口(包含了HMR)
