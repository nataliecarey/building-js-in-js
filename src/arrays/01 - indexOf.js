export default function createArrayFromItems (...items) {
  return {
    indexOf: Array.prototype.indexOf.bind(items) // replace this with your implementation
  }
}
