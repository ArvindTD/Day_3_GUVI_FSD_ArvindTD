let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

console.log("---------");
console.log("For loop");
console.log("---------");
for (let i=0; i<object.length; i++){

        console.log(`Person: ${object[i].person}, Age: ${object[i].age}, Company: ${object[i].company}`) 
}

console.log("---------");
console.log("ForEach loop");
console.log("---------");

Object.entries(object).forEach(item => 
  console.log( `Person: ${item[1].person}, Age: ${item[1].age}, Company: ${item[1].company}` ));

console.log("---------");
console.log("ForIn loop");
console.log("---------");

  for (let i in object) {
    console.log(`Person: ${object[i].person}, Age: ${object[i].age}, Company: ${object[i].company}`);
}

console.log("---------");
console.log("ForOf loop");
console.log("---------");

for (var item of object) {
       console.log(`Person: ${item.person}, Age: ${item.age}, Company: ${item.company}`) 
    
}

console.log("---------");



