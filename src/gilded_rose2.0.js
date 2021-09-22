import AgedBrie from "./products/AgedBrie"
import StandardItem from "./products/standardItem"
import Sulfuras from "./products/Sulfuras"

export default class Shop{
    items = []
    
    addNewProduct(item){
        let standard = true
       
            if(item.name==="Aged Brie"){
                item=new AgedBrie(item.name,item.sellIn,item.quality)
                standard=!standard
            }
            
            if(item.name==="Sulfuras, Hand of Ragnaros"){
                item=new Sulfuras(item.name)
                standard=!standard
            }
            if(standard){
                item = new StandardItem(item.name,item.sellIn,item.quality)
            }
                
            this.items=[...this.items,item]
          // this.items=[...this.items,new StandardItem(item.name,item.sellIn,item.quality)]
    }



    update(){
        this.items.forEach((item) =>{
            item.update()
            
        })

        return this.items;
    }

    reset(){
        this.items=[]
    }
}