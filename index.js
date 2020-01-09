class Location {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  equals(loc) {
    return this.x === loc.x && this.y === loc.y;
  }
}

// const loc1 = new Location(0,0);
// const loc2 = new Location(0,0);
// const loc3 = new Location(0,1);

// console.log(loc1);
// console.log(loc1.equals(loc2));
// console.log(loc2.equals(loc1));
// console.log(loc3.equals(loc1));
// console.log(loc2.equals(loc3));

class Item {
  constructor (name, type, img) {
    this.name = name;
    this.type = type;
    this.img = img;
  }
}

class Adversary {
  constructor(Location) {
    this.Location = location;
  }

  move() {

  }

}
const inventory = {'bread': 0, 'greens': 0, 'cheese': 0, 'meat': 0, 'veggies': 0, 'condiment': 0};
class Raccoon {
  constructor(inventory, Location) {
    this.inventory = inventory;
    this.Location = location;
  }

  move() {

  }

  tryAddToInventory(item) {
    if (!item in inventory) {
      inventory['name']++;
    }
  }

  confiscateItem() {

  }

  tryMakePanini() {

  }

}


// Raccoon
// Methods:
// constructor(Location) 
// move() (DON’T TRY THIS YET)
// tryAddToInventory() (if this item type doesn’t already exist in inventory, add it)
// confiscateItem() (empty a random inventory slot)
// tryMakePanini() (return true if every inventory slot is filled, else false)
// Properties:
// inventory (object with predefined empty properties for bread, greens, cheese, meat, veggie, condiment)
// location (hold an instance of the location class)
