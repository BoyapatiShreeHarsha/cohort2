// let s=0;
// let m=0;
// let h=0;

// setInterval(counter,1000);

// function counter(){
//     s++;
//     if(s==60)
//     {
//         s=0;
//         m++;
//     }
//     if(m==60)
//     {
//         m=0;
//         h++;
//     }

//     console.log(`${h}:${m}:${s}`);
// }


console.log("Hi ");

async function f1() {
    let p = await new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`p is executed sucessfully`);
        }, 1000);
    });

    console.log(p);

    let p2 = await new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`p2 is executed sucessfully`);
        }, 2000);
    });

    console.log(p2);

    

}


f1();



let a = 0;
    for (let i = 0; i < 10000000; i++) {
        a++;
    }
    console.log(a);


    async function f2() {
        let p = await new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(`pf2 is executed sucessfully`);
            }, 1);
        });
    
        console.log(p);
    
        let p2 = await new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(`p2f2 is executed sucessfully`);
            }, 5000);
        });
    
        console.log(p2);
    
        
    
    }
    
// f2();   
    


