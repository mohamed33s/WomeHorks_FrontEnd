// Calculate area of a rectangle
let lengthRectangle = 17;
let widthRectangle = 6;
areaRectangle = lengthRectangle * widthRectangle;
console.log(`The area of the rectangle is: ${areaRectangle}`);

// The Temperature Converte
let celsius = 45;
let fahrenheit = celsius * 1.8 + 32;
console.log(`${celsius}°C is ${fahrenheit} °F`);
let celsius2 = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} °F is ${celsius2}°C`);

//Numbers' summations
let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
  sum += Numbers[i];
}

console.log(`the sum of all numbers ${sum}`);

//Maximum number
array = [16, 4, 2, 0, 19, 6];
max = 0;
for (let i = 0; i < array.length; i++) {
  max = Math.max(max, array[i]);
}
console.log(max);

//Reverse Array
reverse_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverse_array.reverse());

//stars pattern
let n = 5;
let stars = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);
