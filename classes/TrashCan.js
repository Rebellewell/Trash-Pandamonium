import { getRandEl } from "../utility";

const possItemsToYield = ['bread', 'greens', 'cheese', 'meat', 'veggies', 'condiment'];

export default class TrashCan {
  constructor(location) {
    this.fresh = true;
    this.turnsTilFresh = 0;
    this.location = location;
  }

  yield() {
    let yieldItem = null;
    if(this.fresh) {
      yieldItem = getRandEl(possItemsToYield);
      this.turnsTilFresh = 15;
    }
    return yieldItem;
    this.fresh = false;
  }

  freshen() {
    if(this.turnsTilFresh > 0) {
      this.turnsTilFresh--;
    }
    if(this.turnsTilFresh === 0) {
      this.fresh = true;
    }
  }
}

// TrashCan
// Methods:
// yield() (returns a random food item if this trash is fresh)
// freshen() (decrements turnsTilFresh by one down to min 0)
// Properties:
// fresh (defaults to true, false after yielding)
// turnsTilFresh (defaults to 0, 15 after yielding)
// location
