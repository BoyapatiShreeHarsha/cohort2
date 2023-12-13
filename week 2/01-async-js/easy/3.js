

const fs =require('fs');

function Myreadfile(){
fs.readFile('./a.txt',{ encoding: 'utf8', flag: 'r' },function(err,data){
    if(err)
    console.log(err);
    else
    console.log(data);

})
}


Myreadfile();


let a=0;
for(let i=0;i<1000000000;i++)
{
    a++;
}
console.log(a);








