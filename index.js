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


