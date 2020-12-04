A = new Array(1, 2, 3, 4, 5, 6);

for (i = 0; i < A.length/2; i++) {
  additional = A[i];
  A[i] = A[A.length - i-1];
  A[A.length - i-1] = additional;
}
console.log(A);
