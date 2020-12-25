let A = [34, 17, 45, 65];
let B = [43, 33, 56, 18];
let D = [38, 66, 89, 23];

function getMaxs(A, B, D) {
  let maxArray;
  function max(array) {
    if (Array.isArray(array)) {
      let maxValue = array[0];
      for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue) {
          maxValue = array[i];
        }
      }
      return maxValue;
    }
  }
  maxArray = max(A) + ', ' + max(B) + ', ' + max(D);

  return maxArray;
}
console.log(getMaxs(A, B, D));
