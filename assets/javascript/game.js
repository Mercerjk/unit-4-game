$( document ).ready(function(){
   // Selects a random number to be shown at the start of the game
    var Random=Math.floor(Math.random()*75+21)
   
    // Appending random number to the randomNumber id in the html doc
    $('#randomNumber').text(Random);
   
    // Random numbers for each crystal
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

//  Decaring variables for tallies
    var userTotal= 0; 
    var win= 0;
    var lose = 0;
   
  $('#numberWins').text(win);
  $('#numberLosses').text(lose);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*75+21);
        console.log(random)
        $('#randomNumber').text(random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

  //adds the wins to the userTotal
  function yay(){
  alert("You won!");
    win++; 
    $('#userWins').text(win);
    reset();
  }

  //addes the losses to the userTotal
  function loser(){
  alert ("You lose!");
    lose++;
    $('#userLosses').text(losses);
    reset()
  }

  function checkForWin(){
    if (userTotal === random){
      yay();
    }
    else if ( userTotal > Random){
      loser();
    }   
  }

  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      $('#finalTotal').text(userTotal); 
      checkForWin();
    })  

    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      $('#finalTotal').text(userTotal); 
      checkForWin();
    })  

    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      $('#finalTotal').text(userTotal);
      checkForWin();
    })  
    
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      $('#finalTotal').text(userTotal); 
      checkForWin();
    });   
  }); 