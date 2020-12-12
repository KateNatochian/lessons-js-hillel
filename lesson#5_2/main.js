let str1 = 'g sfg wige===ufh///28---3g09=9-0wfffefg9      3ijowie=-fggaaaaagg';
let str2 = 'sdfhuwieufhr289302g130=/./.,';
let str3 = 'plwef/w/wepfk-2302;/';

console.log(symbolDelete(str1));
console.log(symbolDelete(str2));
console.log(symbolDelete(str3));

function symbolDelete (anyString) {
    let wrongSymbols = ['!', /g/, 'f', 'a', '_', '/', '=', / /, '-', '.', ';', ','];
    for (i=0;i<=wrongSymbols.length;i++){
        if(anyString.indexOf(wrongSymbols[i])){
            anyString = anyString.split(wrongSymbols[i]).join('');
        }
         
    }
    return anyString;   
}