//const {Shop, Item} = require("../src/gilded_rose");
import Item from "../src/products/Item"
import Shop from "../src/index"

describe("Gilded Rose", function() {
  it("should foo", function() {
   
   
    const gildedRose = new Shop()
    
    gildedRose.addNewProduct(new Item("foo", 10, 20))

    const items = gildedRose.update();
    
   
    expect(items[items.length-1].name).toBe("foo");
    expect(items[items.length-1].sellIn).toBe(9);
    expect(items[items.length-1].quality).toBe(19);
    gildedRose.reset()

  });

  it("should degrade by 2 if valid date expired", function() {
    let sellIn = 0
     const gildedRose = new Shop();
     gildedRose.addNewProduct(new Item("foo3", sellIn, 5))
  
      const items = gildedRose.update();
      
     
      expect(items[items.length-1].name).toBe("foo3");
      expect(items[items.length-1].sellIn).toBe(sellIn-1);
      expect(items[items.length-1].quality).toBe(3);
      gildedRose.reset()
    });

  it("should not allow quality lower than 0", function() {
   let sellIn = 0
    const gildedRose = new Shop();
    gildedRose.addNewProduct(new Item("foo2", sellIn, 1))
    
 
     const items = gildedRose.update();
     
    
     expect(items[items.length-1].name).toBe("foo2");
     expect(items[items.length-1].sellIn).toBe(sellIn-1);
     expect(items[items.length-1].quality).toBe(0);
    
   });

   //+------------ Aged Brie----------*//

   it("increase Aged brie quality (if overall quality < 50)", function() {
    let sellIn = 5
    let quality = 2
     const gildedRose = new Shop();
     gildedRose.addNewProduct(new Item("Aged Brie", sellIn, quality))
  
      const items = gildedRose.update();
      
     
      expect(items[items.length-1].name).toBe("Aged Brie");
      expect(items[items.length-1].sellIn).toBe(sellIn-1);
      expect(items[items.length-1].quality).toBe(quality+1);
     
    });

    it("increase Aged brie quality by two when expired (if overall quality < 50)", function() {
      let sellIn = 0
      let quality = 2
       const gildedRose = new Shop();
       gildedRose.addNewProduct(new Item("Aged Brie", sellIn, quality))
    
        const items = gildedRose.update();
     
       
        expect(items[items.length-1].name).toBe("Aged Brie");
        expect(items[items.length-1].sellIn).toBe(sellIn-1);
        expect(items[items.length-1].quality).toBe(quality+2);
      
      });

      it("should not allow Aged Brie quality over 50", function() {
        let sellIn = Math.random()>=0.5 ? 0 : 2
        let quality = 50
         const gildedRose = new Shop();
         gildedRose.addNewProduct(new Item("Aged Brie", sellIn, quality))
      
          const items = gildedRose.update();
          expect(items[items.length-1].name).toBe("Aged Brie");
          expect(items[items.length-1].sellIn).toBe(sellIn-1);
          expect(items[items.length-1].quality).toBe(50);
         
        });

        /* --------------Sulfuras-------*/
        it("should never degrade Sulfuras", function() {
         
           const gildedRose = new Shop();
           gildedRose.addNewProduct(new Item("Sulfuras, Hand of Ragnaros", 0,0))
        
            const items = gildedRose.update();
            
           
            expect(items[items.length-1].name).toBe("Sulfuras, Hand of Ragnaros");
            
            expect(items[items.length-1].quality).toBe(80);
           
          });

          /*-------- Backstage Pass ----*/

          it("should increase quality + 1 if over 10 days", function() {
         
            const gildedRose = new Shop();
           let quality = 12
            gildedRose.addNewProduct(new Item("Backstage passes to a TAFKAL80ETC concert", 20,quality))
         
             const items = gildedRose.update();
             
            
             expect(items[items.length-1].name).toBe("Backstage passes to a TAFKAL80ETC concert");
             
             expect(items[items.length-1].quality).toBe(quality+1);
            
           });

           it("should increase quality + 2 if less than 10 days", function() {
         
            const gildedRose = new Shop();
            let quality = 12
            gildedRose.addNewProduct(new Item("Backstage passes to a TAFKAL80ETC concert", 9,quality))
         
             const items = gildedRose.update();
             
            
             expect(items[items.length-1].name).toBe("Backstage passes to a TAFKAL80ETC concert");
             
             expect(items[items.length-1].quality).toBe(quality+2);
            
           });

           it("should increase quality + 3 if less than 5 days", function() {
         
            const gildedRose = new Shop();
            let quality = 12
            gildedRose.addNewProduct(new Item("Backstage passes to a TAFKAL80ETC concert", 4,quality))
         
             const items = gildedRose.update();
             
            
             expect(items[items.length-1].name).toBe("Backstage passes to a TAFKAL80ETC concert");
             
             expect(items[items.length-1].quality).toBe(quality+3);
            
           });

           it("quality should drop to zero after concert", function() {
         
            const gildedRose = new Shop();
            let quality = 12
            gildedRose.addNewProduct(new Item("Backstage passes to a TAFKAL80ETC concert", 0,quality))
         
             const items = gildedRose.update();
             
            
             expect(items[items.length-1].name).toBe("Backstage passes to a TAFKAL80ETC concert");
             
             expect(items[items.length-1].quality).toBe(0);
            
           });

           it("quality should not surpass 50", function() {
         
            const gildedRose = new Shop();
            let quality = 12
            let sellIn = Math.floor(Math.random() * (15-3 + 1)) + 3;
            gildedRose.addNewProduct(new Item("Backstage passes to a TAFKAL80ETC concert", sellIn,49))
            
            console.log(sellIn);
             const items = gildedRose.update();
             
            
             expect(items[items.length-1].name).toBe("Backstage passes to a TAFKAL80ETC concert");
             
             expect(items[items.length-1].quality).toBe(50);
            
           });

          /*---- Conjured Item----*/

          it("should increase two times faster than normal item", function() {
         
            const gildedRose = new Shop();
            let sellIn = 5
            let quality = 12
            gildedRose.addNewProduct(new Item("Conjured item", sellIn,quality))
         
             const items = gildedRose.update();
             
            
            
             expect(items[items.length-1].sellIn).toBe(sellIn-1);
             expect(items[items.length-1].quality).toBe(quality-2);
            
           });

           it("should increase two times faster than normal item with expired date", function() {
         
            const gildedRose = new Shop();
            
            let quality = 12
            gildedRose.addNewProduct(new Item("Conjured item", 0,quality))
         
             const items = gildedRose.update();
             
            
            
             expect(items[items.length-1].sellIn).toBe(-1);
             expect(items[items.length-1].quality).toBe(quality-4);
            
           });

           it("should never return negative quality", function() {
         
            const gildedRose = new Shop();
            
            
            gildedRose.addNewProduct(new Item("Conjured item", 0,0))
         
             const items = gildedRose.update();
             
            
            
             expect(items[items.length-1].sellIn).toBe(-1);
             expect(items[items.length-1].quality).toBe(0);
            
           });

           /* ----------- Other cases--------*/

           it("should be able to test different products", function() {
         
            const gildedRose = new Shop();
          
            let quality2=36
            gildedRose.addNewProduct(new Item("Sulfuras, Hand of Ragnaros",0,45))
            
            gildedRose.addNewProduct(new Item("Conjured item",0,quality2))
         
             const items = gildedRose.update();
             
            
             expect(items[0].sellIn).toBe(-1);
             expect(items[0].quality).toBe(80);
             
             expect(items[1].sellIn).toBe(-1);
             expect(items[1].quality).toBe(quality2-4);

             expect(items.length).toEqual(2);
            
           });



});
