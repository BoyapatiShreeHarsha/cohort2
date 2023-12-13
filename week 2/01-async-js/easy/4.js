const fs =require('fs');

function Myreadfile(){
fs.readFile('./a.txt',{ encoding: 'utf8', flag: 'r' },function(err,data){
    if(err)
    console.log(err);
    else
    console.log(data);
    data = `${data} +  now adding into it`;
    fs.writeFile('./a.txt',data,'utf8',function(err){
        if(err)
        throw err;
        else
        {
            console.log("Successfully wrote");
        }
    })

})
}


Myreadfile();