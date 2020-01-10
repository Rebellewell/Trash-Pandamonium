export default class Grid {
  constructor(layout, raccoon, adversary) {
    this.layout = layout;
    this.raccoon = raccoon;
    this.adversary = adversary;
  }

  handleMove() {
    
  }

}

// Grid
// Properties:
// layout (a 7X7 2D array of empty spaces and objects)
// raccoon
// adversary
// trashCans (an array of all the trash cans)
// Methods:
// handleMove() (process raccoon move, then randomly move adversary 3 times. If any of those movements hit the raccoon, confiscate a random item from the raccoon)
// constructor: randomly place 4 trash cans in unoccupied spots in layout, as well as a panini press in center

