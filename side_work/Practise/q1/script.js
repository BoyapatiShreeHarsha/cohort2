
// document.body.style.setProperty("--cell-gap", `${cell_gap}rem`);

let red_color;
let blue_color;
let green_color;


let box=document.getElementById("box");
box.addEventListener("mousemove",getcoordinates);


function getcoordinates(e){
    let rect= box.getBoundingClientRect();
    let x=e.clientX-rect.left;
    let y=e.clientY-rect.top;
    

     red_color = ((rect.width-x)/rect.width)*255;
     blue_color=(x/rect.width)*255;
     green_color=0;

    // console.log(red_color,blue_color);

    box.style.setProperty("--red-color",`${red_color}`);
    box.style.setProperty("--blue-color",`${blue_color}`);
    box.style.setProperty("--green-color",`${green_color}`);
}

box.addEventListener("mouseleave",function(e){

    red_color=255;
    blue_color=255;
    green_color=255;
    box.style.setProperty("--red-color",`${red_color}`);
    box.style.setProperty("--blue-color",`${blue_color}`);
    box.style.setProperty("--green-color",`${green_color}`);
})
// box.addEventListener("mouseenter",function(){
//     console.log("mouse enter");
//     box.classList.remove("color");
// })



//to map the vlaues there is one library called gsap online  gsap.utils.mapReduce();