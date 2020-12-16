let A = [];

function fillArray(A, a) {  
  for (let i = 0; i < a; i++) {
    A.push(Math.floor(Math.random() * 10));
  }
  return A;
}
console.log(fillArray(A, 20));
