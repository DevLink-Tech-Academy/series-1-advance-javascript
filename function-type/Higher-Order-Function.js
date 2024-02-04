function add(x, y) {
    return x + y;
  }
  function higherOrderFunction(callback, x, y) {
    return callback(x, y);
  }
  console.log(higherOrderFunction(add, 3, 5)); // Output: 8