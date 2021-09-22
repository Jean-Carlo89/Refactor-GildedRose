import Item from "./Item";

export default class ConjuredItem extends Item{
    
    update(){
        this.sellIn -=1

        if(this.sellIn>0){
            this.quality-=2
        }else{
            this.quality-=4
        }

        if(this.quality<0){
            this.quality=0;
        }
    }
}