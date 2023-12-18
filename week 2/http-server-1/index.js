const express = require("express");

const port=3000;

const app=express();

function sum(n){
    return (n*(n+1))/2;
}


app.get("/",function(req,res){
    const n=req.query.n;
    let b=sum(n);
    res.send(`Hi there sum of ${n} is ${b}`);
})



app.listen(port,function(){
    console.log(`listening on port ${port}`);
})