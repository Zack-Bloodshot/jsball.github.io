var k = 0
var p = 0
document.getElementById('bdy').ontouchmove = movefunc(event)
function colorfunc(){
  if (k == 1){
    document.getElementById("dot").style.backgroundColor = "#00ccff";
    k=0;
  }
  else{
    document.getElementById("dot").style.backgroundColor = "#fa36ff";
        k++;
  }
}

function movefunc(event){
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    //var z = event.touches[0].clientZ;
    var to_move = document.getElementById('dot');
    //to_move.style.bottom = x + 'px';
    to_move.style.left = x + 'px'
    to_move.style.top = y + 'px'
    to_move.style.position = 'absolute';
    }
function darkmode(){
    var derk = document.getElementById('dark');
    if (p == 1){
      document.getElementById('bdy').setAttribute('bgcolor', 'white');
      derk.style.borderColor = 'black';
      derk.style.backgroundColor = 'white';
      p = 0;
    }
    else{
      document.getElementById('bdy').setAttribute('bgcolor', 'black');
      derk.style.borderColor = 'white';
      derk.style.backgroundColor = 'black';
      p++;
    }
}
function clicker(){
  console.log('touch!');
  var to_move = document.getElementById('dot');
  var x = to_move.style.left;
  //console.log(to_move)
  console.log(x);
  to_move.style.left = (x + 100) + 'px';
}