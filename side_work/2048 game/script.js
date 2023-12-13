import Grid from "./grid.js";
import Tile from "./tile.js";


let hs=document.getElementById("hs");
let aleart=document.getElementsByClassName("aleart")[0];
aleart.hidden=true;
document.getElementById("restart").addEventListener("click", restart);

function restart(){
    location.reload();
}

if(localStorage.getItem("score")==null)
{
    localStorage.setItem("score",0);
    hs.innerHTML=`HS:00`;
}
else
{
    let result=localStorage.getItem("score");
    hs.innerHTML=`HS:${result}`;
}



let counter=document.getElementById("counter");

function padZero(value) {
    return value < 10 ? `0${value}` : `${value}`;
}

let s=0;
let m=0;
let h=0;

const myInterval = setInterval(count,1000);

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
    
    let H=padZero(h);
    let M=padZero(m);
    let S=padZero(s);
    counter.innerHTML=`${H}:${M}:${S}`;
}








let gameboard=document.getElementsByClassName("game-board");
gameboard=gameboard[0];

let grid = new Grid(gameboard);

grid.randomEmptyTile().tile= new Tile(gameboard);
grid.randomEmptyTile().tile= new Tile(gameboard);

// console.log(grid.cellsByColumn);


setUpInput();

function setUpInput(){
    window.addEventListener("keydown",  handleInput , {once : true});
    // once: means it will run only one time after that it will get delete
    // as we have to wait until the animation is completed
}

async function handleInput(e){
    // console.log(e.key);
    switch (e.key) {

        case "ArrowUp":
            if(!canMoveUp())
            {
                setUpInput();
                return;
            }
            await moveUp();
            break;
        case "ArrowDown":
            if(!canMoveDown())
            {
                setUpInput();
                return;
            }
            await moveDown();
            break;
        case "ArrowLeft":
            if(!canMoveLeft())
            {
                setUpInput();
                return;
            }
            await moveLeft();
            break;
        case "ArrowRight":
            if(!canMoveRight())
            {
                setUpInput();
                return;
            }
            await moveRight();
            break;
        default:
            setUpInput();
            return;
    }
    
    grid.cells.forEach(function(cell){
        cell.mergetiles();
        

    });

    
    let high=0;

    for(let i=0;i<grid.cells.length;i++)
    {
        high=Math.max(high,grid.cells[i].v);
    }
    console.log(high);

    if(high==2048)
    {
        aleart.innerHTML=`you won`;
            aleart.hidden=false;
            let result=localStorage.getItem("score");
            localStorage.removeItem("score");
            localStorage.setItem("score",Math.max(high,result));
            clearInterval(myInterval);
    }

    let newTile=new Tile(gameboard);
    grid.randomEmptyTile().tile= newTile;


    if(!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight())
    {
        newTile.waitForTransition(true).then(()=>{
            aleart.innerHTML=`you lose`;
            aleart.hidden=false;
            let result=localStorage.getItem("score");
            localStorage.removeItem("score");
            localStorage.setItem("score",Math.max(high,result));
            clearInterval(myInterval);
        })
        

        return;
    }
    
    


    setUpInput();
}


function moveUp(){
    return slideTiles(grid.cellsByColumn);
}

function canMoveUp(){
    return checkTiles(grid.cellsByColumn);
}

function moveDown(){
    return slideTiles(grid.cellsByColumn.map(col=>[...col].reverse()));
}
function canMoveDown(){
    return checkTiles(grid.cellsByColumn.map(col=>[...col].reverse()));
}

function moveLeft(){
    return slideTiles(grid.cellsByRow);
}

function canMoveLeft(){
    return checkTiles(grid.cellsByRow);
}

function moveRight(){
    return slideTiles(grid.cellsByRow.map(row=>[...row].reverse()));
}

function canMoveRight(){
    return checkTiles(grid.cellsByRow.map(row=>[...row].reverse()));
}

function slideTiles(cells){
    return Promise.all(
    cells.flatMap(group => {
        let promises =[];
        for(let i=1;i<group.length;i++)
        {
            let cell=group[i];
            if(cell.tile==null)
            continue;
            let lastValidCell=null;
            for(let j=i-1;j>=0;j--)
            {
                let movecell=group[j];
                if(!movecell.canAccept(cell.tile))
                break;
                lastValidCell=movecell;
            }

            if(lastValidCell!=null)
            {
                promises.push(cell.tile.waitForTransition());  //it returns a promise
                if(lastValidCell.tile!=null)
                {
                    lastValidCell.mergetile= cell.tile;
                }
                else
                {
                    lastValidCell.tile=cell.tile;
                }
                cell.tile=null;
            }
        }

        return promises;
    })
    );
    
}


function checkTiles(cells){
    for(let k=0;k<cells.length;k++){
        let group=cells[k];
        for(let i=1;i<group.length;i++)
        {
            let cell=group[i];
            if(cell.tile==null)
            continue;
            let lastValidCell=null;
            for(let j=i-1;j>=0;j--)
            {
                let movecell=group[j];
                if(!movecell.canAccept(cell.tile))
                break;
                lastValidCell=movecell;
            }

            if(lastValidCell!=null)
            {
                // console.log("returning true");
                return true;
                
            }

        }
    }
    // console.log("returning false");
    return false;
}
    

