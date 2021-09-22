import Item from "./Item";

export default class AgedBrie extends Item{
    constructor(name,sellIn,quality){
        super(name,sellIn,quality)
    }

    update(){
        this.sellIn -=1

        if(this.sellIn>0){
            this.quality++
        }else{
            this.quality+=2
        }

        if(this.quality>50){
            this.quality=50
        }
    }
}