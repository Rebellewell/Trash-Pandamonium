export default class Creature {
  constructor(location) {
    this.location = location;
  }

  move(location) {
    this.location = location;
  }

  getNearby(type, grid) {
    const matches = [];
    // loop over each neighboring row and the row this creature is on
    for(let y = this.location.y - 1; y <= this.location.y + 1; y++) {
      // loop over each column next to this creature, and the column occupied by this creature
      if(y < 0 || y > 6) continue; // skip rows outside grid
      for(let x = this.location.x - 1; x <= this.location.x + 1; x++) {
        if(x < 0 || x > 6) continue; // skip columns outside grid
        if(grid[y][x] instanceof type) {
          matches.push(grid[y][x]);
        }
      }
    }  
  }
}