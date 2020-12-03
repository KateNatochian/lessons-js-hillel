A = new Array(1, 2, 3, 4, 5, 6);

for (i = 0; i < A.length - 1; i++) {
  for (j = 0; j < A.length - i - 1; j++) {
    k = A[j];
    A[j] = A[j + 1];
    A[j + 1] = k;
  }
}
console.log(A);


