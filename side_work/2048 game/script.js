import Grid from "./grid.js";
import Tile from "./tile.js";



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

    grid.cells.forEach(cell => cell.mergetiles());
    // let a = grid.wincase();
    // if(a)
    // {
    //     alert("You Won");
    //     return;
    // }
    let newTile=new Tile(gameboard);
    grid.randomEmptyTile().tile= newTile;


    if(!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight())
    {
        newTile.waitForTransition(true).then(()=>{
            alert("you lose");
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
    

