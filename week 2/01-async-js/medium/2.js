setInterval(counter,1000);

function counter(){
    let date =new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    // console.log(`${h}::${m}::${s}`);

    let str= (h>=12)?"PM":"AM";
    h=h%12;
    console.log(`${h}::${m}::${s}  ${str}`);

}