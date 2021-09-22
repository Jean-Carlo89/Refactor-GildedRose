import Item from "./Item"

export default class SulfurasItem extends Item{
    constructor(name){
        super(name,0,80)
    }

    update(){
        this.sellIn -=1
    }
}