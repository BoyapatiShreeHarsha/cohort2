

let counter=document.getElementById("counter");


let s=0;
let m=0;
let h=0;

// setInterval(count,1000);

function count(){
    s++;
    if(s==60)
    {
        s=0;
        m++;
    }
    if(m==60)
    {
        m=0;
        h++;
    }

    counter.innerHTML=`${h}:${m}:${s}`;
}

