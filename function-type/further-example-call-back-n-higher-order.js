// Higher-order function that takes two numbers and a callback function
function calculate(x, y, callback) {
    const result = callback(x, y);
    console.log("Result:", result);
  }
  
  // Callback function to add two numbers
  function add(x, y) {
    return x + y;
  }
  
  // Callback function to multiply two numbers
  function multiply(x, y) {
    return x * y;
  }
  
  // Using the higher-order function with different callback functions
  calculate(3, 5, add); // Output: Result: 8
  calculate(3, 5, multiply); // Output: Result: 15
  