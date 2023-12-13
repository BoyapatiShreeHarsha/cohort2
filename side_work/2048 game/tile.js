export default class Tile{
    #tileElement
    #x
    #y
    #value

    constructor(gameboard,value = Math.random() >.5? 2:4){
        this.#tileElement=document.createElement("div");
        this.#tileElement.classList.add("tile");
        gameboard.append(this.#tileElement);
        this.value=value; // calling get value
    }

    set value(v){
        this.#value=v;
        this.#tileElement.textContent = v;
        let power = Math.log2(v);
        let backgroundLightness = 100 - power*9;
        this.#tileElement.style.setProperty("--background-lightness",`${backgroundLightness}%`);
        this.#tileElement.style.setProperty("--text-lightness",`${backgroundLightness <=50 ? 90:10}%`);

    }
    get value(){
        return this.#value; 
    }

    set x(value){
        this.#x=value;
        this.#tileElement.style.setProperty("--x",value);
    }
    get tileElement(){
        return this.#tileElement;
    }

    set y(value){
        this.#y=value;
        this.#tileElement.style.setProperty("--y", value);
    }

    remove(){
        this.#tileElement.remove();
        // this.#tileElement=null;  -> not working
    }

    waitForTransition(flag = false){
        return new Promise(resolve => {
            this.#tileElement.addEventListener( flag ? "animationend" : "transitionend",resolve,{once:true});
        })
    }
}