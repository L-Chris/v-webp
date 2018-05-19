<h1 align="center">
  v-webp-next
</h1>

## ✨ Features:

- use webp when supported
- support background-image and img

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
import VWebp from 'v-webp-next'

Vue.use(VWebp)

// nromal use with img
<img v-webp="./static/img/test.jpg"/>
<img v-webp="require('./assets/test.jpg')"/>
<img v-webp="[require('./assets/test.jpg'), require('./assets/test.webp')]"/>

// add modifier .bg when use image in background-image property
<div v-webp.bg="[require('./assets/test.jpg'), require('./assets/test.webp')]"></div>
<div v-webp.bg="./static/img/test.jpg"></div>
```