import { getRandEl } from './utility';
import Location from './classes/Location';
import Item from './classes/Item';
import Adversary from './classes/Adversary';
import Raccoon from './classes/Raccoon';
import Grid from './classes/Grid';
import TrashCan from './classes/TrashCan';

const bob = new Raccoon(new Location(0,0));
bob.tryAddToInventory(new Item('wheat', 'bread', 'img'));
bob.tryAddToInventory(new Item('lettuce', 'greens', 'img'));
bob.tryAddToInventory(new Item('gouda', 'cheese', 'img'));
bob.tryAddToInventory(new Item('ham', 'meat', 'img'));
bob.tryAddToInventory(new Item('lettuce', 'veggies', 'img'));
bob.tryAddToInventory(new Item('mayo', 'condiment', 'img'));
console.log(bob.tryMakePanini());
console.log(bob);

const oscarTheGrouch = new TrashCan('any', 'raccoon', 'adversary');
console.log(oscarTheGrouch.yield());
console.log(oscarTheGrouch);
console.log(oscarTheGrouch.freshen());
console.log(oscarTheGrouch);