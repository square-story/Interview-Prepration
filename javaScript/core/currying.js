//For example, let's say you have a function that calculates the sum of two numbers:

function add(x, y) {
  return x + y;
}

//You can curry this function to create a reusable function that always adds 5 to a given number:

const add5 = add.bind(null, 5);

//Now, you can use add5 to create a new function that adds 5 to any number:

add5(10); // returns 15
add5(20); // returns 25