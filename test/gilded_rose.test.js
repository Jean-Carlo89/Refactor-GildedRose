//const {Shop, Item} = require("../src/gilded_rose");
import Item from "../src/products/Item"
import Shop from "../src/glided_rose2.0"

describe("Gilded Rose", function() {
  it("should foo", function() {
   // const gildedRose = new Shop([new Item("foo", 0, 0)]);
   const gildedRose = new Shop(new Item("foo", 10, 20));
   console.log(gildedRose.items)

   return
    const items = gildedRose.updateQuality();
    console.log(items)
    //expect(items[0].name).toBe("fixme");
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].sellIn).toBe(19);
  });
});
