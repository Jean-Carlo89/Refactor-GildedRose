import AgedBrie from "./products/AgedBrie"
import StandardItem from "./products/standardItem"
import Sulfuras from "./products/Sulfuras"
import BackstagePass from "./products/BackstagePass"
import ConjuredItem from "./products/ConjuredItem"


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


            if(item.name==="Backstage passes to a TAFKAL80ETC concert"){
                item=new BackstagePass(item.name,item.sellIn,item.quality)
                standard=!standard
            }
            if(item.name==="Conjured item"){
                item=new ConjuredItem(item.name,item.sellIn,item.quality)
                standard=!standard
            }
            if(standard){
                item = new StandardItem(item.name,item.sellIn,item.quality)
            }
                
            this.items=[...this.items,item]
          /
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