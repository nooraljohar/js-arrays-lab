//Exercise 1: Define an empty array
const foods =[];
console.log('Exercise 1 result:', foods);

//Exercise 2: Add strings to the array
foods[0]="pizza";
foods.push("cheeseburger");

console.log('Exercise 2 result:', foods);

//Exercise 3: Insert at the beginning
foods.unshift("taco");
console.log('Exercise 3 result:', foods);

//Exercise 4: Access an array element
const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

//Exercise 5: Insert an element between two others
foods.splice(1, 0, 'tofu');
console.log('Exercise 5 result:', foods);

//Exercise 6: Replace elements
