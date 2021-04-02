function helloConsole () {
  console.log('こんにちは');
}

helloConsole();
helloConsole();
helloConsole();

function hello (name) {
  console.log(`hello,${name}`);
}

hello('太郎');

function greeting() {
  const hour = new Date().getHours();
  if(hour <= 11) {
    return 'おはようございます。';
  }

  return 'こんにちは。';
}

const aisatu = greeting();


function findSquareArea(length) {
  const area = length * length;
  return area;
}

// const result = findSquareArea(100);
// console.log(result);

function findTriangleArea (x, y) {
  const result = x * y / 2
  return result
}

const result = findTriangleArea(10, 5);
console.log(result);


const add = function(x, y) {
  const sum = x + y;
  return sum;
}

const results = add(1,6);
console.log(results);

const tasizann = (x, y) => {
  const sum = x + y;
  return sum;
}

const kekka = tasizann(8,9);
console.log(kekka);

const findTriangleAreas = function(w, t) {
  return w * t / 2;
}

console.log(findTriangleAreas(1,4));


const findTriangle = (a, b) => a * b / 2;

console.log(findTriangle(1,4));
