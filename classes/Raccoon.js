import { getRandEl } from '../utility';
import Creature from './Creature';

export default class Raccoon extends Creature {
  constructor(location) {
    super(location);
    this.inventory = {
      bread: null, 
      greens: null, 
      cheese: null, 
      meat: null, 
      veggies: null, 
      condiment: null
    };
  }

  tryAddToInventory(item) {
    if (!this.inventory[item.type]) {
      this.inventory[item.type] = item;
    }
  }

  confiscateItem() {
    const types = Object.keys(this.inventory);
    const typeToRemove = getRandEl(types);
    this.inventory[typeToRemove] = null;
  }

  tryMakePanini() {
    const itemPresent = Object.values(this.inventory);
    for(let i = 0; i < itemPresent.length; i++) {
      if(itemPresent[i] === null) {
        return false;
      }
    }
    return true;
  }
}