import { getRandEl } from "../utility";
import Item from './item';




export default class TrashCan {
  constructor(location) {
    this.fresh = true;
    this.turnsTilFresh = 0;
    this.location = location;
  }

  yield() {
    let item = null;
    if(this.fresh) {
      item = genItem();
      this.fresh = false;
      this.turnsTilFresh = 10;
    }
    return item;
  }

  freshen() {
    if(this.turnsTilFresh > 0) {
      this.turnsTilFresh--;
    }
    if(!this.turnsTilFresh) {
      this.fresh = true;
    }
  }
}

function genItem() {
  const types = ['cheese', 'meat', 'bread', 'veggie', 'condiment', 'greens'];
  const randType = getRandEl(types);
  const potentialItems = {
    cheese: ['Brie', 'Bleu', 'Cheddar', 'Mozzarella', 'Pepper Jack'],
    meat: ['Steak', 'BBQ Pork', 'Grilled Chicken', 'Armadillo'],
    bread: ['French', 'Wheat', 'Ciabatta', 'White'],
    veggie: ['Tomato', 'Pickle', 'Cabbage'],
    condiment: ['Mayo', 'Mustard', 'Fry Sauce'],
    greens: ['Sprouts', 'Lettuce', 'US Dollar']
  };
  const randItem = getRandEl(potentialItems[randType]);
  return new Item(randItem, randType, 'img');
}