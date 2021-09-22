import Item from "./Item"

export default class BackstagePass extends Item{
    constructor(name,sellIn,quality){
        super(name,sellIn,quality)
    }

    update(){
        this.sellIn -=1
        
        if (this.sellIn < 0) {
            this.quality=0
            return
        }
       
        
        if (this.sellIn <= 5)  {
            this.quality += 3;
            return
        }
        
        if (this.sellIn <= 10){
           this.quality += 2;
           return
        } 

        if (this.sellIn > 10){
            this.quality += 1;
            return
         } 

         if (this.quality > 50){
            this.quality =50;
            
         } 
        
    }
}