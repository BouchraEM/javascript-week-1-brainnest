// vraag 1
const sideLength = 9;
const diagonal = Math.sqrt(Math.pow(sideLength, 2) + Math.pow(sideLength, 2));
console.log(`The diagonal of the square is ${diagonal.toFixed(2)}`);

// vraag 2
const a = 5;
const b = 6;
const c = 7;

// Using Heron's formula
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`The area of the triangle is ${area.toFixed(2)}`);

//vraag 3
const PI = Math.PI;
const radius = 4;

const circumference = 2 * PI * radius;
const surfaceArea = PI * radius ** 2;

console.log(`Circumference: ${circumference}`);
console.log(`Surface Area: ${surfaceArea}`);
