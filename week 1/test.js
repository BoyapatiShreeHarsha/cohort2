

console.log("Hi there");

function fun1(){
    console.log("calling fun1");

}

function fun2(){
    console.log("Calling fun2");

}



setTimeout(fun1,2);
setTimeout(fun2,1);

let a=0;
for(let i=0;i<10000;i++)
{
    a++;
}

console.log(a);
console.log("thread end");

