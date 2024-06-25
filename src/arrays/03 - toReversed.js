// eslint-disable-next-line
const originalArraytoReversed = Array.prototype.toReversed

export default function createArrayFromItems (...items) {
  // eslint-disable-next-line
  Array.prototype.toReversed = originalArraytoReversed
  return [...items]
}

export function resetArrayPrototype () {
  // eslint-disable-next-line
  Array.prototype.toReversed = originalArraytoReversed
}
