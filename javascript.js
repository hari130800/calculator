for(let i=0; i<=10 ;i++)
{if (i===5)
{break;}
console.log(i);
}


let day=3;
switch(day){
    case 1:
    console.log("monday");
    break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    default :
    console.log("other days");
break;
}
for(let p=0;p<=20;p++)
{if(p===15)
{break;}
console.log(p);
}
for (let x=0;x<15;x++)
{if(x===7)
    {continue;}
console.log(x);
}
let y=BigInt(12345678998745632100)
console.log(y);
 let z = myFunction(4,5);
 function myFunction(a,b){
    return a*b
}
console.log(z);

function fibonacci(n){
    if(n<=1)return n;
    return fibonacci(n-1)+
    fibonacci(n-2);
}
console.log(fibonacci(20));

let a=myFunction(6,5);
function myFunction(c,d){
    return c/d
}
console.log(a);

