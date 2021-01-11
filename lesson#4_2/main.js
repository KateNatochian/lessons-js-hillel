console.log('start');

let m = 4;
let n = 4;

let arrayA = new Array(m);
for (let i = 0; i < arrayA.length; i++){
  arrayA[i] = new Array(n);
  for (let j = 0; j < arrayA[i].length; j++){
    arrayA[i][j] = Math.floor(Math.random() * 41 - 20);
  }
}
console.log(arrayA);

console.log('------------------------------------');

let arrayB = arrayA;

for (let i = 0; i < arrayB[0].length; i++) {
  let sum = 0;
  for (let j = 0; j < arrayB.length; j++) {
    sum = sum + arrayB[j][i];
  }
  if (sum <= 0) {
    for (let k = 0; k < arrayB.length; k++){
      arrayB[k].splice(i, 1);
    
    }
  } 
}
console.log(arrayB);
  

