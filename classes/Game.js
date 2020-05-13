import { getRandNum, getRandEl } from '../utility';
import Location from './Location';
import Raccoon from './Raccoon';
import Adversary from './Adversary';
import TrashCan from './TrashCan';

export default class Game {
  constructor(domID) {
    this.domID = domID;
    this.grid = Array(7)
      .fill()
      .map((el) => Array(7).fill());
    this.turns = 0;
    this.status = 'playing';

    // get random exclusive spots for raccoon, adversary, and 5 trash cans
    const locations = [];
    for (let i = 0; i < 7; i++) {
      locations.push(genNewLocation(locations));
    }

    this.raccoon = new Raccoon(locations[0]);
    this.grid[locations[0].y][locations[0].x] = this.raccoon;

    this.adversary = new Adversary(locations[1]);
    this.grid[locations[1].y][locations[1].x] = this.adversary;

    this.trashCans = [];
    locations.slice(2).forEach((loc) => {
      const newCan = new TrashCan(loc);
      this.trashCans.push(newCan);
      this.grid[loc.y][loc.x] = newCan;
    });

    this.populateGrid();
    this.populateInfo();
  }
  canMoveHere(loc) {
    return (
      loc.x >= 0 &&
      loc.y >= 0 &&
      loc.x <= 6 &&
      loc.y <= 6 &&
      !this.grid[loc.y][loc.x]
    );
  }

  getPossibleMoves(loc) {
    const { x: oldX, y: oldY } = loc;
    const possibleMoves = [];
    if (this.canMoveHere(new Location(oldX - 1, oldY - 1))) {
      possibleMoves.push(new Location(oldX - 1, oldY - 1));
    }
    if (this.canMoveHere(new Location(oldX - 1, oldY))) {
      possibleMoves.push(new Location(oldX - 1, oldY));
    }
    if (this.canMoveHere(new Location(oldX - 1, oldY + 1))) {
      possibleMoves.push(new Location(oldX - 1, oldY + 1));
    }
    if (this.canMoveHere(new Location(oldX, oldY - 1))) {
      possibleMoves.push(new Location(oldX, oldY - 1));
    }
    if (this.canMoveHere(new Location(oldX, oldY + 1))) {
      possibleMoves.push(new Location(oldX, oldY + 1));
    }
    if (this.canMoveHere(new Location(oldX + 1, oldY - 1))) {
      possibleMoves.push(new Location(oldX + 1, oldY - 1));
    }
    if (this.canMoveHere(new Location(oldX + 1, oldY))) {
      possibleMoves.push(new Location(oldX + 1, oldY));
    }
    if (this.canMoveHere(new Location(oldX + 1, oldY + 1))) {
      possibleMoves.push(new Location(oldX + 1, oldY + 1));
    }
    return possibleMoves;
  }

  handleMove(dir) {
    console.log('dir:', dir);
    if (this.status !== 'playing') {
      return;
    }

    let { x: newX, y: newY } = this.raccoon.location;
    switch (dir) {
      case 'left':
        newX--;
        break;
      case 'right':
        newX++;
        break;
      case 'up':
        newY--;
        break;
      case 'down':
        newY++;
        break;
    }
    const newRaccoonLoc = new Location(newX, newY);
    const willMove = this.canMoveHere(newRaccoonLoc);

    if (willMove) {
      // remove raccoon from old spot in grid Game
      const { x: oldX, y: oldY } = this.raccoon.location;
      this.grid[oldY][oldX] = undefined;
      // update the carroon's location on his location prop
      this.raccoon.location = newRaccoonLoc;
      // update the raccoon's location on Game's
      this.grid[newY][newX] = this.raccoon;
      // check if he's next ot trash can
      const nearbyTrash = this.raccoon.getNearby(TrashCan, this.grid);
      const freshTrash = nearbyTrash.filter((trash) => trash.fresh);
      // if so try to yield from the trash can
      if (freshTrash.length) {
        const item = freshTrash[0].yield();
        this.raccoon.tryAddToInventory(item);
      }
    }

    this.trashCans.forEach((trash) => trash.freshen());
    // console.table(this.grid);
    // console.log(this.raccoon);

    this.turns++;

    if (this.raccoon.hasAllIngredients()) {
      this.status = 'won';
      alert('You scavenged all your ingredients! Enjoy your panini!!');
    }

    if (this.turns === 100 && this.status === 'playing') {
      this.status = 'lost';
      alert('Game Over! Your adversary has triumphed.');
    }

    // adversary has to move
    for (let i = 0; i < 3; i++) {
      const possibleMoves = this.getPossibleMoves(this.adversary.location);
      if (possibleMoves.length) {
        const randMove = getRandEl(possibleMoves);
        // move adversary to random possible move
        const { x: oldAdX, y: oldAdY } = this.adversary.location;
        this.grid[oldAdY][oldAdX] = undefined;
        this.adversary.location = randMove;
        this.grid[randMove.y][randMove.x] = this.adversary;
      }

      // check to see if adversary is within one of raccoon
      const nearbyRaccoon = this.adversary.getNearby(Raccoon, this.grid);
      if (nearbyRaccoon.length) {
        // if so, confiscate from raccoon and end adversary's turn
        const itemStolen = this.raccoon.confiscateItem();
        if (itemStolen) {
          alert(`Your ${itemStolen.name} has been stolen!`);
        }
        break;
      }
    }
    this.populateGrid();
    this.populateInfo();
  }

  populateGrid() {
    const game = document.getElementById(this.domID);
    const grid = game.querySelector('.grid');
    grid.innerHTML = '';
    for (let i = 0; i < 7; i++) {
      const row = document.createElement('div');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('div');
        if (this.grid[i][j]) {
          const img = document.createElement('img');
          img.src = this.grid[i][j].img;
          cell.appendChild(img);
        }
        row.appendChild(cell);
      }
      grid.appendChild(row);
    }
  }

  populateInfo() {
    const turnsRemaining = document.querySelector('.turns');
    turnsRemaining.innerText = 100 - this.turns;

    const game = document.getElementById(this.domID);
    const inventory = game.querySelector('.inventory');
    inventory.innerHTML = '';

    for (let type in this.raccoon.inventory) {
      const itemSlot = document.createElement('div');
      itemSlot.classList.add('item');

      const typeName = document.createElement('label');
      typeName.innerText = type;
      const invLvl = document.createElement('span');
      if (this.raccoon.inventory[type]) {
        invLvl.innerText = this.raccoon.inventory[type].name;
      } else {
        invLvl.innerText = 'EMPTY';
      }

      itemSlot.appendChild(typeName);
      itemSlot.appendChild(invLvl);
      inventory.appendChild(itemSlot);
    }
  }
}

function genNewLocation(locations) {
  let unique = true;
  let newLoc;
  do {
    newLoc = new Location(getRandNum(0, 6), getRandNum(0, 6));
    const matches = locations.filter((loc) => loc.equals(newLoc));
    unique = !matches.length;
  } while (!unique);

  return newLoc;
}
