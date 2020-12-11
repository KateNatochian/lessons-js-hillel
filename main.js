firstObj = {
    a : 10,
    b : 5,
    c : [1, 2, 3, 6, 11],
};
secondObj = {
    d : 11,
    e : 6, 
    f : ['four', 5, 'six', 34],
};
allArray = new Array();
sum = 0;

takeArray(firstObj);
takeArray(secondObj);

console.log(allArray)

for(i = 0; i<allArray.length; i++){
    if (typeof allArray[i] == 'number'){
        sum += allArray[i];
    }
    
}
console.log(sum);

function takeArray(object) {
    for (key in object){
        if(typeof object[key] == 'object'){
            allArray = allArray.concat(object[key]);
        }
    }
}