var game;

// Create a new game instance 600px wide and 450 px tall
game= new Phaser.Game(600,450, Phaser.AUTO,'');

//first parameter is how out state will be called
//second parameter is an object containing the needed methods for state functionality
game.state.add('Menu',Menu);
game.state.start('Menu');

//adding the game state
game.state.add('Game',Game);

game.state.start('Menu');