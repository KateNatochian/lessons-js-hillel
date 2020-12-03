n = +prompt ('введите число ');
m = +prompt ('введите число ');

star = '*';
space = '&nbsp;';

for (i = 1; i <= n; i++) {
  document.write(star);
}
document.write('<br/>');
for (i = 1; i <= m - 2; i++) {
  str = '';
  for (j = 1; j <= n - 2; j++) {
    str = str + space;
  }
  document.write('*' + str + '*'+'<br />');
}
for (i = 1; i <= n; i++) {
  document.write(star);
}
