
const cell_width=100;
const cell_height=100;
const cell_gap=0.1;
const cell_radius=4;
const grid_size=4;

// --cell-width:100px;
// --cell-height:100px;
// --cell-gap:0.1rem;
// --cell-radius:4px;




export default class Grid{
    #cells
    // private properties
    constructor(gridElement){
        document.body.style.setProperty("--cell-gap", `${cell_gap}rem`);
        document.body.style.setProperty("--cell-radius",`${cell_radius}px`);
        document.body.style.setProperty("--cell-width",`${cell_width}px`);
        document.body.style.setProperty("--cell-height",`${cell_height}px`);
        // document can't have style
        
        let grid=createCellElements(gridElement);
        this.#cells=grid.map((cell,index)=>{
            return new Cell(cell,index%grid_size,Math.floor(index/grid_size));
        })
        // console.log(this.#cells);

        
    }

    get cells(){
        return this.#cells;
    }

    get cellsByColumn(){
        return this.#cells.reduce((cellGrid, cell)=>{
            cellGrid[cell.x]=cellGrid[cell.x] || [];
            cellGrid[cell.x][cell.y]=cell;
            return cellGrid;
        },[]);
        
    }
    //nedd to see it again

    get cellsByRow(){
        return this.#cells.reduce((cellGrid, cell)=>{
            cellGrid[cell.y]=cellGrid[cell.y] || [];
            cellGrid[cell.y][cell.x]=cell;
            return cellGrid;
        },[]);
        
    }

    get #emptyCells(){
        return this.#cells.filter(cell => cell.tile ==null);
    }

    randomEmptyTile(){
        let randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
        return this.#emptyCells[randomIndex];
    }

    wincase(){
            this.#cells.forEach(cell =>{
                if(cell.tile!=null)
                {
                    if(cell.tile.value==8)
                    return true;
                }
            }
            
            )
            return false;
        };

    
}


function createCellElements(gridElement){
    let grid=[];
    for(let i=0;i<grid_size;i++)
    {
        let rows=[];

        let row=document.createElement('div');
        row.classList.add("row");
        for(let j=0;j<grid_size;j++)
        {
            let cell=document.createElement('div');
            cell.classList.add("cell");
            // console.log(cell);

            row.append(cell);
            grid.push(cell);

        }
        gridElement.append(row);
        
    }
    return grid;
}

class Cell{
    #cellElement
    #x
    #y
    #tile
    #mergetile

    constructor(cellElement,x,y)
    {
        this.#cellElement=cellElement;
        this.#x=x;
        this.#y=y;
    }

    set tile(value){
        // console.log(value);
        this.#tile=value;
        if(value==null || value==undefined)
        return;
        this.#tile.x=this.#x;  //calling get x
        this.#tile.y=this.#y;

    }

    get v(){
        if(this.tile ==null)
        {
            return 0;
        }

        return this.tile.value;
    }

    get tile(){
        return this.#tile;

    }

    get x(){
        return this.#x;
    }

    get y(){
        return this.#y;
    }

    get mergetile(){
        return this.#mergetile;
    }

    set mergetile(value){
        this.#mergetile=value;
        if(value==null)
        return;
        this.#mergetile.x=this.#x;  //calling get x
        this.#mergetile.y=this.#y;
    }

    canAccept(value) {
        // console.log(this.tile?.value);
        return (this.tile== null || (this.mergetile==null && this.tile.value===value.value));
    }

    mergetiles(){
        if(this.tile == undefined || this.mergetile == undefined)
            return;
            this.tile.value = this.tile.value + this.mergetile.value;
            this.mergetile.remove();
            this.mergetile=null;
            return;
        
    }



}