function log(m){
    console.log(m);
}
log("mi log");

let myObj = new Object();
myObj.id = 1;
myObj.name = "Pepe";
myObj.p = true;
let myMap = new Map();
let myArray = new Array();
let myArray2 = [];
let a = [1,2,3,4,5];
log(a);

/*
for(let i = 0; i < a.length; i++){
    log(a[i]);
}
*/
a.forEach(function(v){
    log(`v = ${v}`);	
});

let suma = a.reduce((acum, v) =>{
    log(`acum = ${acum}, v = ${v}`);
    return acum + v;
},0);
log(`suma = ${suma}`);

let contact = {
    name: "Pepe",
    phone: "123456789"
};
log(contact.name);