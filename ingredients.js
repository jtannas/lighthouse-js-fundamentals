var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
let ingredients_count = ingredients.length
while (i < ingredients_count) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let ingredient of ingredients) {
  console.log(ingredient);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let ingredient of ingredients.reverse()) {
  console.log(ingredient);
}