let obj = {
    name: "hariharan",
    car: "BMW",
    series: "6-th 620d gt",
    vechiletype: "fourwheeler",
}
console.log(obj);
var car = {
    carprice: "25000",
    carinsurance: "12years"
}
console.log(car);
var div = (25000 / 12)
console.log(div);

for (var x in obj, car)
    console.log(obj + " : " + car);
let obj1 = {
    rate: "2000",
    qnty: "200",
}
console.log(obj1);
let obj2 = {
    rate: "2500",
    qnty: "250"
}
console.log(obj2);
let z = {
    z: "obj1+obj2",
}

console.log(obj1 + obj2);
let sum = (2500 + 2000)

console.log(sum);
let mul = (div * 12);
console.log(mul);
if (i = 30)
    (i++, i < 35);
console.log(i);

let mod = (sum % 12);
console.log(mod);
ary = ["hariharan@gmail.com", "datascience", 21,]
console.log(ary);
for (let x of ary) {
    console.log(x);
}
let h = 5n;
let y = Number(h) / 2;
console.log(y);
let k=5;
let g=k*2
let l= (k+g);
console.log(l);
let s=1
while(s<=10){
    console.log(s);s++;
    
}



let day=3;
switch(day){
    case 1:
    console.log("monday");
    case 2:
        console.log("tuesday");
    case 3:
        console.log("wednesday");
    case 4:
        console.log("thursday");
    default :
    console.log("other days");
}


