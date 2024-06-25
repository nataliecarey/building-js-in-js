// eslint-disable-next-line
const originalArrayMap = Array.prototype.map

export default function createArrayFromItems (...items) {
  // eslint-disable-next-line
  Array.prototype.map = originalArrayMap
  return [...items]
}

export function resetArrayPrototype () {
  // eslint-disable-next-line
  Array.prototype.map = originalArrayMap
}
