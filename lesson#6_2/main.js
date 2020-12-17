let A = [];
let B = [];

A = fillArray(A, 10);
B = fillArray(B, 10);

// console.log(A);
// console.log(B);

// console.log(sumArray(A));
// console.log(sumArray(B));
console.log(biggerArray(A, B));

function biggerArray(Array1, Array2) {
  if (sumArray(Array1) > sumArray(Array2)) {
    return Array1;
  }
  return Array2;
}

function sumArray(Array) {
  let sum = 0;
  for (let i = 0; i < Array.length; i++) {
    sum = sum + Array[i];
  } 
  return sum;
}

function fillArray(A, a) {  
  let B = new Array();
  for (let i = 0; i < a - A.length; i++) {
    B.push(Math.floor(Math.random() * 10));
  }
  return A.concat(B);
}