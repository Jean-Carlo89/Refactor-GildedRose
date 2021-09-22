
export default class Shop{
    items = []
    constructor(item){
        
        this.items=[...this.items,item]
       
    }

    updateQuality(){
        this.items.forEach((item) =>{
            item.sellIn -= 1;
            
            if(item.sellIn>0){
                item.quality -= 1
            }else{
                item.quality -=2
            }

            if(item.quality<0){
                item.quality=0;
            }
            
        })

        return this.items;
    }
}