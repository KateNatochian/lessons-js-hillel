let n = 50;
let m = 50;

let center = (n / 2);
document.write('<br />');
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    
    if (i + j <= n + 1 && (i - 1 >= j || j > center)) {
      document.write('1 ');
    } else {
      document.write('0 ');
  }

  } document.write('<br />');
}
