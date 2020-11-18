$(Start);
function Start()
{
  $('#successMessage').hide();

  $('#EntranceMessage').show();
  $('#EntranceMessage').animate({
    left: '380px',
    top: '200px',
    width: '400px',
    height: '100px',
    opacity: 1
  });


}

function init() {
  

  $('#EntranceMessage').hide();
  
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );


    
  // Reset the game
  correctCards = 0;
  $('#set1').html( '' );
  $('#set2').html( '' );

  var images = ['a.jpg', 'b.png', 'c.jpg','d.jpg','e.jpg', 'f.jpg','g.jpg' ];
  var images2 = ['as.jpg', 'bs.jpg', 'cs.jpg','ds.jpg','es.jpg', 'fs.jpg','gs.jpg'];
  
  var numbers = [ 1, 2, 3, 4, 5, 6, 7];
  numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<7; i++ ) {
    $('<div> <img src="set1/' + images[numbers[i]-1]+'"></div>').data( 'number',numbers[i]).attr( 'id','card'+numbers[i] ).appendTo( '#set1' ).draggable( {
      containment: '#content',
      stack: '#set1 div',
      cursor: 'move',
      revert: true
    } );
  }

  for ( var i=1; i<=7; i++ ) {
    $('<div> <img src="set2/' + images2[i-1]+'"></div>').data( 'number',i).appendTo( '#set2' ).droppable( {
      accept: '#set1 div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop(event, ui) {
  
  var slotNumber = $(this).data('number');
  var cardNumber = ui.draggable.data('number');
  if (slotNumber === cardNumber) {
    ui.draggable.addClass('correct');
    ui.draggable.draggable('disable');
    $(this).droppable('disable');
    ui.draggable.position({
      of: $(this), my: 'left top', at: 'left top'
    });
    ui.draggable.draggable('option', 'revert', false);
    correctCards++; 
  }
  if (correctCards === 7) {
          var score=70;
          alert("Your Score is "+ score);
          var name=document.getElementById("name").value;
           var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 
           var msg; 
            db.transaction(function (tx) { 
              tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)'); 
              tx.executeSql('INSERT INTO LOGS (id, log) VALUES (score, name)'); 
              msg = '<p>Log message created and row inserted.</p>'; 
               
           })
         
           db.transaction(function (tx) { 
              tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) { 
                 var len = results.rows.length, i; 
                 msg = "<p>Found rows: " + len + "</p>"; 
                 document.querySelector('#status').innerHTML +=  msg; 
         
                  
              }, null); 
           });
        
    $('#successMessage').show();
    $('#successMessage').animate({
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    });
  }
}
