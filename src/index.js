import Webp from './directive'

const install = function (Vue) {
  Vue.directive('Webp', Webp)
}

if (window.Vue) {
  window.webp = Webp
  Vue.use(install)
}

Webp.install = install

export default Webp