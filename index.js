// import { getRandEl } from './utility';
// import Location from './classes/Location';
// import Item from './classes/Item';
// import Adversary from './classes/Adversary';
// import Raccoon from './classes/Raccoon';
// import TrashCan from './classes/TrashCan';
import Grid from './classes/Grid';


// const bob = new Raccoon(new Location(0,0));
// bob.tryAddToInventory(new Item('wheat', 'bread', 'img'));
// bob.tryAddToInventory(new Item('lettuce', 'greens', 'img'));
// bob.tryAddToInventory(new Item('gouda', 'cheese', 'img'));
// bob.tryAddToInventory(new Item('ham', 'meat', 'img'));
// bob.tryAddToInventory(new Item('lettuce', 'veggies', 'img'));
// bob.tryAddToInventory(new Item('mayo', 'condiment', 'img'));
// console.log(bob.tryMakePanini());
// console.log(bob);

// const oscarTheGrouch = new TrashCan('any', 'raccoon', 'adversary');
// console.log(oscarTheGrouch.yield());
// console.log(oscarTheGrouch);
// console.log(oscarTheGrouch.freshen());
// console.log(oscarTheGrouch);

const grid = new Grid();
console.log(grid);
console.table(grid.layout);

document.addEventListener('keyup', event => {
  if(event.keyCode === 37) {
    grid.handleMove('left');
  } else if(event.keyCode === 38) {
    grid.handleMove('up');
  } else if(event.keyCode === 39) {
    grid.handleMove('right');
  } else if(event.keyCode === 40) {
    grid.handleMove('down');
  }
});