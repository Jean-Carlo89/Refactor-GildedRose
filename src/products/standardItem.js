import Item from "./Item"

export default class StandardItem extends Item{
    update() {
        this.sellIn -= 1;

        if(this.sellIn>0){
            this.quality -= 1
        }else{
            this.quality -=2
        }

        if(this.quality<0){
            this.quality=0;
        }
        
      }
}