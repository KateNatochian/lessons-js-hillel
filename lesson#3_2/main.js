n = +prompt ('введите число ');
m = +prompt ('введите число ');

star = '*';
space = '&nbsp;';

linesSpaces = '';
linesStars = '';

for (j = 1; j <= n - 2; j++) {
  linesSpaces = linesSpaces + space;
  linesStars = linesStars + star;
}
resultColumns = '*' + linesSpaces + '*<br/>';
resultRows = linesStars + star + star + '<br/>';
resultLinesEmpty = '';
for (i = 1; i <= m - 2; i++) {
  resultLinesEmpty = resultLinesEmpty + resultColumns;
}
document.write(resultRows);
document.write(resultLinesEmpty);
document.write(resultRows);
 
