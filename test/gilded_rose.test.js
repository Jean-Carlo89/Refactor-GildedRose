//const {Shop, Item} = require("../src/gilded_rose");
import Item from "../src/products/Item"
import Shop from "../src/glided_rose2.0"

describe("Gilded Rose", function() {
  it("should foo", function() {
   
   
    const glidedRose = new Shop()
    
    glidedRose.addNewProduct(new Item("foo", 10, 20))

    const items = glidedRose.update();
    console.log(items)
   
    expect(items[items.length-1].name).toBe("foo");
    expect(items[items.length-1].sellIn).toBe(9);
    expect(items[items.length-1].quality).toBe(19);
    glidedRose.reset()

  });

  it("should degrade by 2 if valid date expired", function() {
    let sellIn = 0
     const glidedRose = new Shop();
     glidedRose.addNewProduct(new Item("foo3", sellIn, 5))
  
      const items = glidedRose.update();
      console.log(items)
     
      expect(items[items.length-1].name).toBe("foo3");
      expect(items[items.length-1].sellIn).toBe(sellIn-1);
      expect(items[items.length-1].quality).toBe(3);
      glidedRose.reset()
    });

  it("should not allow quality lower than 0", function() {
   let sellIn = 0
    const glidedRose = new Shop();
    glidedRose.addNewProduct(new Item("foo2", sellIn, 1))
    
 
     const items = glidedRose.update();
     console.log(items)
    
     expect(items[items.length-1].name).toBe("foo2");
     expect(items[items.length-1].sellIn).toBe(sellIn-1);
     expect(items[items.length-1].quality).toBe(0);
    
   });

   //+------------ Aged Brie----------*//

   it("increase Aged brie quality", function() {
    let sellIn = 5
    let quality = 2
     const glidedRose = new Shop();
     glidedRose.addNewProduct(new Item("Aged Brie", sellIn, quality))
  
      const items = glidedRose.update();
      console.log(items)
     
      expect(items[items.length-1].name).toBe("Aged Brie");
      expect(items[items.length-1].sellIn).toBe(sellIn-1);
      expect(items[items.length-1].quality).toBe(quality+1);
     
    });

    it("increase Aged brie quality by two when expired", function() {
      let sellIn = 0
      let quality = 2
       const glidedRose = new Shop();
       glidedRose.addNewProduct(new Item("Aged Brie", sellIn, quality))
    
        const items = glidedRose.update();
     
       
        expect(items[items.length-1].name).toBe("Aged Brie");
        expect(items[items.length-1].sellIn).toBe(sellIn-1);
        expect(items[items.length-1].quality).toBe(quality+2);
      
      });

      it("should not allow Aged Brie quality over 50", function() {
        let sellIn = Math.random()>=0.5 ? 0 : 2
        console.log(sellIn)
        let quality = 50
         const glidedRose = new Shop();
         glidedRose.addNewProduct(new Item("Aged Brie", sellIn, quality))
      
          const items = glidedRose.update();
          console.log(items)
         
          expect(items[items.length-1].name).toBe("Aged Brie");
          expect(items[items.length-1].sellIn).toBe(sellIn-1);
          expect(items[items.length-1].quality).toBe(50);
         
        });

});
