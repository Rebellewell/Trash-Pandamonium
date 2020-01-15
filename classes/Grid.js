import { getRandNum } from '../utility';
import Location from './Location';
import Raccoon from './Raccoon';
import Adversary from './Adversary';
import TrashCan from './TrashCan';

export default class Grid {
  constructor() {
    this.layout = Array(7)
    .fill()
    .map(el => Array(7).fill());

    // get random exclusive spots for raccoon, adversary, and 5 trash cans, panini in middle
    const locations = [];
    for(let i = 0; i < 7; i++) {
      locations.push(genNewLocation(locations)); 
    }

    this.raccoon = new Raccoon(locations[0]);
    this.layout[locations[0].y][locations[0].x] = this.raccoon;

    this.adversary = new Adversary(locations[1]);
    this.layout[locations[1].y][locations[1].x] = this.adversary;

    this.trashCans = [];
    locations.slice(2).forEach(loc => {
      const newCan = new TrashCan(loc);
      this.trashCans.push(newCan);
      this.layout[loc.y][loc.x] = newCan;
    });
  }

  handleMove(dir) {
    console.log('dir:', dir);
    console.log(this.raccoon.getNearby(TrashCan, this.layout));
    console.log(this.raccoon.getNearby(Adversary, this.layout));
  
    // raccoon has to move
      // check if raccoon can move where he wants to move
        // if not, do nothing
        // if yes, move then
          // update raccoon's location on location property
          // update raccoon's location on grid's layout
          // check if he's next to trash can
            // if so, try to yield from trash can

    // adversary has to move
      // generate a list of all possible movements
      // move adversary to random possible move
      // check to see if adversary is within one of raccoon
        // if so, confiscate from raccoon and end adversary's turn
        // otherwise, adversary gets three moves a turn, and each move you must do all of the above steps
    
    // all trash cans need to freshen
      // loop over all trash cans to feshen
  }
}

function genNewLocation(locations) {
  let unique = true;
  let newLoc;
  do {
    newLoc = new Location(getRandNum(0,6), getRandNum(0,6));
    const matches = locations.filter(loc => loc.equals(newLoc));
    unique = !matches.length;
  } while(!unique);

  return newLoc;
}
