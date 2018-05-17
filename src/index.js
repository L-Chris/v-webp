const transfer = _ => _.replace(/([^.]+)\..+/, '$1.webp')

const isArray = obj => {
  return toString.call(obj) === '[object Array]'
}

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
    if (!value || (typeof value !== 'string' && !isArray(value))) return
    if (isArray(value) && !value.every(_ => typeof _ === 'string')) return

    if (isArray(value)) {
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
    // component
  }
}