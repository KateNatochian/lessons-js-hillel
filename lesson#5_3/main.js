let x = +prompt('Введите первую переменную',);
let znak = prompt('Введите один из знаков: +, -, *, /, %, ^', );
let y = +prompt('Введите вторую переменную', );


console.log(doMath(x, znak, y));

function doMath(x, znak, y) {
  let result;
    
  if (znak.includes('+')) {
    result = x + y;
  }
  else if (znak.includes('-')) {
    result = x - y;
  }
  else if (znak.includes('*')) {
    result = x * y;
  }
  else if (znak.includes('/')) {
    result = x / y;
  }
  else if (znak.includes('%')) {
    result = x % y;

  }
  else if (znak.includes('^')) {
    result = x ^ y;
  }
  
  return result;
  }
  // let result;
  // switch (znak) {
  //   case '+':
  //     result = x + y;
  //     break;
  //   case '-':
  //     result = x - y;
  //     break;
  // }
  // return result;
  

