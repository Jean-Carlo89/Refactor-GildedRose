//const {Shop, Item} = require("../src/gilded_rose");
import Item from "../src/products/Item"
import Shop from "../src/glided_rose2.0"

describe("Gilded Rose", function() {
  it("should foo", function() {
   
   const gildedRose = new Shop(new Item("foo", 10, 20));

    const items = gildedRose.updateQuality();
    console.log(items)
   
    expect(items[items.length-1].name).toBe("foo");
    expect(items[items.length-1].sellIn).toBe(9);
    expect(items[items.length-1].quality).toBe(19);
    gildedRose.reset()

  });

  it("should degrade by 2 if valid date expired", function() {
    let sellIn = 0
     const gildedRose = new Shop(new Item("foo3", sellIn, 5));
  
      const items = gildedRose.updateQuality();
      console.log(items)
     
      expect(items[items.length-1].name).toBe("foo3");
      expect(items[items.length-1].sellIn).toBe(sellIn-1);
      expect(items[items.length-1].quality).toBe(3);
      gildedRose.reset()
    });

  it("should not allow quality lower than 0", function() {
   let sellIn = 0
    const gildedRose = new Shop(new Item("foo2", sellIn, 1));
 
     const items = gildedRose.updateQuality();
     console.log(items)
    
     expect(items[items.length-1].name).toBe("foo2");
     expect(items[items.length-1].sellIn).toBe(sellIn-1);
     expect(items[items.length-1].quality).toBe(0);
     gildedRose.reset()
   });

});
