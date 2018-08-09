
// 深度克隆
export function deepClone(origin, target) {
  for (let prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      if (typeof origin[prop] === 'object') {
        if(Object.prototype.toString.call(origin[prop]) === '[object Array]') {
          target[prop] = []
        } else {
          target[prop] = {}
        }
        target[prop] = deepClone(origin[prop], target[prop])
      } else {
        target[prop] = origin[prop]
      }
    }
  }
  return target
}
