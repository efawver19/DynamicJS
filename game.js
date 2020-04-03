
var happyIcons = ["far fa-grin-beam", "far fa-laugh-squint", "far fa-grin-stars"];

var sadIcons = [ "fas fa-frown", "fas fa-angry", "fas fa-tired"];

var cellNums = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7",
 "t8", "t9", "t10", "t11"];

 var points = 0;
 var clickTimer;
 var id; 

function startProgram()
{
  $('#click').click(function() 
  {
    var elem = document.getElementById("animate"); 

    $("#animate").addClass("hidden")
    points = 0;
    startGame();
    $("#points").empty().append("Points: " + points);
    clearInterval(id);
    elem.style.left = "0px";
    addIcon();
    });

}

function addIcon()
{

  var happySadNum = Math.floor(Math.random() * 3);
  var iconNum = Math.floor(Math.random() * 3);
  var randCellNum = Math.floor(Math.random() * 12);

  if(happySadNum == 0)
  {
    var activeFace = '<a class="sad" id="activeFace" href="#" onclick="iconClickHandler(false)"><i id="face" class="' + sadIcons[iconNum] + '"></i></a>';
  
  }
  else
  {
    var activeFace = '<a class="happy" id="activeFace" href="#" onclick="iconClickHandler(true)"><i id="face" class="' + happyIcons[iconNum] + '"></i></a>';

  }

  var activeCell = '#' + cellNums[randCellNum];
  $(activeCell).empty().append(activeFace);

  if(happySadNum == 0)
  {
    clickTimer = setTimeout(sadTimeOut, 1500);
  }
  else
  {
    clickTimer = setTimeout(happyTimeOut, 1500);
  }

}


function iconClickHandler(success)
{
  clearTimeout(clickTimer);

  if(success) 
  {
    points++;
  }
  else
  {
    points--;
  }

  $("#points").empty().append("Points: " + points);
  $("#activeFace").parent().empty();

  if((points <= -5) || (points >= 15))
  {
    endGame();
  }
  else
  {
    addIcon();
  }
}

function happyTimeOut()
{
  iconClickHandler(false)
}

function sadTimeOut()
{
  iconClickHandler(true)
}

function startGame()
{
  clearTimeout(clickTimer);
  $("#activeFace").parent().empty();
}

function endGame()
{
  clearTimeout(clickTimer);
  $("#activeFace").parent().empty();
  if(points <= -5)
  {
    $("#postMessage").empty().append("You Lose");
  }
  else
  {
    $("#postMessage").empty().append("You Win!");
  }
  gameOver();
}

//from w3schools
function gameOver() 
{
  var elem = document.getElementById("animate"); 
  $("#animate").removeClass("hidden")
  var pos = 0;
  id = setInterval(frame, 5);
  
  function frame() {
    if (pos == 10000) {
      clearInterval(id);
    } else {
      pos++; 
      //elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
