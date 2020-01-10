export default class Location {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  equals(loc) {
    return this.x === loc.x && this.y === loc.y;
  }
}
