export default function createArrayFromItems (...items) {
  return {
    reverse: Array.prototype.reverse.bind(items) // replace this with your implementation
  }
}
