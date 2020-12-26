let obj1 = {
  a: 10,
  c: 20,
  z: 30,
  e: 70
};
let obj2 = {
  a: 40,
  b: 50,
  c: 60,
  s: 80,
  m: 90
};


function assignObjects(obj1, obj2) {
  let object3 = {};
  function add(object) {
      for (let key in object) {
      object3[key] = object[key];
    }
    return object3;
  }
  
  object3 = add(obj1);
  object3 = add(obj2);
  return object3;
}

console.log(assignObjects(obj1, obj2));