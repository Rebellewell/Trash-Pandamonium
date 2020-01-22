import './styles.css';

import Game from './classes/Game';

const game = new Game('game');
console.log(game);
console.table(game.grid);

document.addEventListener('keyup', event => {
  if(event.keyCode === 37) {
    game.handleMove('left');
  } else if(event.keyCode === 38) {
    game.handleMove('up');
  } else if(event.keyCode === 39) {
    game.handleMove('right');
  } else if(event.keyCode === 40) {
    game.handleMove('down');
  }
});