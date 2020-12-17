let A = [3, 3, 3];

function fillArray(A, a) {  
  let B = new Array();
  for (let i = 0; i < a - A.length; i++) {
    B.push(Math.floor(Math.random() * 10));
  }
  return A.concat(B);
}
console.log(fillArray(A, 20));
