


let s=0;
let m=0;
let h=0;



function counter(){
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

    console.log(`${h}:${m}:${s}`);
    setTimeout(counter,1000);
}

counter();