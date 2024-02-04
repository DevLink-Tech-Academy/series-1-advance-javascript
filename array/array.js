// Creating an array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Accessing elements of an array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Modifying elements of an array
fruits[2] = 'Grapes';
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']

// Adding elements to an array
fruits.push('Pineapple');
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango', 'Pineapple']

// Removing elements from an array
let removed = fruits.pop(); // Removes the last element ('Pineapple')
console.log(removed); // Output: Pineapple
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using array methods (e.g., forEach)
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Finding index of an element
console.log(fruits.indexOf('Banana')); // Output: 1

// Slicing an array
let slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to 2 (not including 3)
console.log(slicedFruits); // Output: ['Banana', 'Grapes']

// Concatenating arrays
let moreFruits = ['Kiwi', 'Strawberry'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango', 'Kiwi', 'Strawberry']

// Sorting an array
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Grapes', 'Mango']
