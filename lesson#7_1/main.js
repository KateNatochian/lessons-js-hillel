function symbolDel(String, symbArr) {
  for (i = 0; i <= symbArr.length; i++){
    if(String.indexOf(symbArr[i])){
      String = String.split(symbArr[i]).join('');
    }
         
  }
  return String; 
}

console.log(symbolDel("hello world", ['l', 'd']));