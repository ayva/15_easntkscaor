var JC = JC || {};

JC.view = (function(){
  var realScore = 0;

  function init(){

          JC.view.fillClickZone();
          JC.view.attachListeners();
        }

  // These three function put the board on the page.

  function fillClickZone(){
                   for (var i = 0; i < 4; i++) {
                     JC.view.addRowToClickZone(i);
                   }
                 }

  function addRowToClickZone( y ){
                       $row = $( "<div class='row'></div>" )
                       $( '#click-zone' ).append( $row )
                       for (var i = 0; i < 4; i++) {
                         JC.view.addClickerToRow( $row, i, y )
                       }
                     }

  function addClickerToRow( row, x, y ){
                     row.append( "<div class='clicker' data-x='" + x + "' data-y='" + y + "'></div>" )
                   }

  // This sets up the click listener on each square.

  function attachListeners(){
                     $( ".clicker" ).click( function(){
                       var $square = $( this )
                       $square.removeClass( "lit" );
                       JC.model.scoreClick($square.data().x, $square.data().y);
                   })}

  // This turns a square red.

  function lightUpSquare( square ){
                   var $square = $( ".clicker[data-x='" + square.x + "'][data-y='" + square.y + "']" );
                   $square.addClass( "lit" );
                 }

  // Adds a random number between 5 and 15 to the score.
  function incrementUpScore(){
                      var $scoreSpan = $( "#score" )
                      var score = parseInt( $scoreSpan.text() );

                      //Controls editing score DOM
                      if (JC.view.realScore === score){
                        JC.view.realScore += ( Math.floor(Math.random() * 15) + 5);
                      } else {
                        JC.view.realScore = 0
                        $scoreSpan.text( JC.view.realScore );
                      }
                      
                      $scoreSpan.text( JC.view.realScore );
                    }

  return {
    incrementUpScore:incrementUpScore,
    realScore: realScore,
    init:init,
    fillClickZone:fillClickZone,
    lightUpSquare:lightUpSquare,
    addRowToClickZone:addRowToClickZone,
    addClickerToRow:addClickerToRow,
    attachListeners:attachListeners

  }
})();
