const fs =require('fs');

function Myreadfile(){
fs.readFile('./a.txt',{ encoding: 'utf8', flag: 'r' },function(err,data){
    if(err)
    console.log(err);
    else
    console.log(data);

    data = data.trim();
    let arr=data.split(" ");
    arr=arr.filter(ele=> ele!="");
    data=arr.join(" ");
    console.log(data);
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