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
      condiment: null,
    };
    this.img =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSh4J6a-8_1p1JWMc8Zxwe8UM_3WsLIB2tnll9kkp1pMRp3ULa8&usqp=CAU';
  }

  tryAddToInventory(item) {
    if (!this.inventory[item.type]) {
      this.inventory[item.type] = item;
    }
  }

  confiscateItem() {
    const types = Object.keys(this.inventory);
    const typeToRemove = getRandEl(types);
    const item = this.inventory[typeToRemove];
    this.inventory[typeToRemove] = null;
    return item;
  }

  tryMakePanini() {
    const itemPresent = Object.values(this.inventory);
    for (let i = 0; i < itemPresent.length; i++) {
      if (itemPresent[i] === null) {
        return false;
      }
    }
    return true;
  }

  hasAllIngredients() {
    return Object.values(this.inventory).filter((item) => !!item).length === 6;
  }
}
