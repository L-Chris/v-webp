<h1 align="center">
  v-webp-next
</h1>

## ✨ Features:

- background-image
- img

## 🔧 Installation

### NPM

```bash
npm install v-webp-next --save
```
### YARN

```bash
yarn add v-webp-next
```

## 📦 Usage

```js
// nromal use with img
<img v-webp="./static/img/test.jpg"/>
<img v-webp="require('./assets/test.jpg')"/>
// use image in background-image
<div v-webp.bg="[require('./assets/test.jpg'), require('./assets/test.webp')]"></div>
```