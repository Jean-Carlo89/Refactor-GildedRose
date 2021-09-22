import StandardItem from "./products/standardItem"


export default class Shop{
    items = []
    constructor(item){
        
        this.items=[...this.items,new StandardItem(item.name,item.sellIn,item.quality)]
       
    }

    updateQuality(){
        this.items.forEach((item) =>{
            item.update()
            
        })

        return this.items;
    }
}