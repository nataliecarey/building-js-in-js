# building-js-in-js

One of my favourite ways to explore Javascript is to build core behaviour as though it didn’t exist.

## How to use this project

1. Clone it
2. Make sure you're using Node 22 or above
3. Run `npm test` to make sure you're all set up properly (no npm install needed thanks to the built-in test runner)
4. Pick a function you want to work on from the `src` directory
5. Replace the core function with your own, (examples below)

## Example

If you're wanting to write your own implementation of `indexOf` you'll find a file something like this:

```
export default function createArrayFromItems (...items) {
  return {
    indexOf: Array.prototype.indexOf.bind(items) // replace this with your implementation
  }
}
```

To get the first test to pass with your own implementation you can update that to:

```
export default function createArrayFromItems (...items) {
  return {
    indexOf: function () {
      return 0
    }
  }
}
```

### Feedback and usage

Feel free to use this as freely and widely as you like, it's open source.  If you find it useful please consider letting me know and crediting me.
