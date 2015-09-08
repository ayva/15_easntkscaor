var JC = JC || {};

JC.model = {

  // Holds squares that are currently lit up on the board.

  activeSquares: [],
  realScore: 0,
  // Randomly generates a pair of coordinates.

  pickSquare: function(){
                var square = {
                      x: Math.floor(Math.random() * 4),
                      y: Math.floor(Math.random() * 4)
                    };
                JC.model.activeSquares.push( square );
                
                JC.view.lightUpSquare( square );
              },

  // Checks to see if a click was on an active square.
  scoreClick: function(x, y){
                for( var i = 0; i < this.activeSquares.length; i++ ){
                  var testSquare = this.activeSquares[i];
                  if( testSquare.x === x && testSquare.y === y ) {
                    JC.view.incrementUpScore();
                    this.activeSquares.splice(i, 1); 
                    break;                    
                  };
                  break;
                };
              },

  
};
