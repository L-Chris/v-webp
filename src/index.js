const transfer = _ => _.replace(/\..+/, '.webp')

const canUseWebp = (() => {
  let element = document.createElement('canvas')
  if (!!element.getContext && element.getContext('2d')) {
    return element.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }
  return false
})()

export default {
  bind (el, {arg, value, modifiers: { bg }}, vnode) {
    const attr = arg || 'src'
    let to = ''
    if (!value || (typeof value !== 'string' && !Array.isArray(value))) return
    if (Array.isArray(value) && !value.every(_ => typeof _ === 'string')) return

    if (Array.isArray(value)) {
      to = canUseWebp ? value[1] : value[0]
    } else {
      to =  canUseWebp ? transfer(value) : value
    }

    // background-image
    if (bg) {
      el.style.backgroundImage = `url(${to})`
      return
    }
    // <img/>
    if (vnode.tag.toLowerCase() === 'img') {
      el.setAttribute(attr, to)
      return
    }
    // Todo component

    // if (value.indexOf('data:image') < 0) {
    //   const url = value.substring(0, value.lastIndexOf('.')) + '.jpg'
    //   el.setAttribute(attr, canUseWebp ? url : value)
    // } else {
    //   el.setAttribute(attr, value)
    // }
  }
}