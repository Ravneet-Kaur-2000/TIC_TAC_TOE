
var flag=0
function a1fun()
{
  if(flag==0)
  {
  document.querySelector("#a1").value="X";
  document.querySelector("#a1").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a1").value="0";
  document.querySelector("#a1").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}

function a2fun()
{
  if(flag==0)
  {
  document.querySelector("#a2").value="X";
  document.querySelector("#a2").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a2").value="0";
  document.querySelector("#a2").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}

function a3fun()
{
  if(flag==0)
  {
  document.querySelector("#a3").value="X";
  document.querySelector("#a3").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a3").value="0";
  document.querySelector("#a3").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}


function a4fun()
{
  if(flag==0)
  {
  document.querySelector("#a4").value="X";
  document.querySelector("#a4").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a4").value="0";
  document.querySelector("#a4").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=0
}
}

function a5fun()
{
  if(flag==0)
  {
  document.querySelector("#a5").value="X";
  document.querySelector("#a5").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a5").value="0";
  document.querySelector("#a5").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}


function a6fun()
{
  if(flag==0)
  {
  document.querySelector("#a6").value="X";
  document.querySelector("#a6").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a6").value="0";
  document.querySelector("#a6").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}

function a7fun()
{
  if(flag==0)
  {
  document.querySelector("#a7").value="X";
  document.querySelector("#a7").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a7").value="0";
  document.querySelector("#a7").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}

function a8fun()
{
  if(flag==0)
  {
  document.querySelector("#a8").value="X";
  document.querySelector("#a8").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a8").value="0";
  document.querySelector("#a8").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}

function a9fun()
{
  if(flag==0)
  {
  document.querySelector("#a9").value="X";
  document.querySelector("#a9").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 2🧍‍♂️"
  flag=1
  }
else
{
  document.querySelector("#a9").value="0";
  document.querySelector("#a9").disabled=true;
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"
  flag=0
}
}


function alltest()
{

  var x1=document.querySelector("#a1").value
  var x2=document.querySelector("#a2").value
  var x3=document.querySelector("#a3").value
  var x4=document.querySelector("#a4").value
  var x5=document.querySelector("#a5").value
  var x6=document.querySelector("#a6").value
  var x7=document.querySelector("#a7").value
  var x8=document.querySelector("#a8").value
  var x9=document.querySelector("#a9").value

  if(x1=='X'&&x2=='X'&&x3=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a1").classList.add("winner")
    document.querySelector("#a2").classList.add("winner")
    document.querySelector("#a3").classList.add("winner")
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a5").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x4=='X'&&x5=='X'&&x6=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a4").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a6").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }

  else if(x7=='X'&&x8=='X'&&x9=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a7").classList.add("winner")
    document.querySelector("#a8").classList.add("winner")
    document.querySelector("#a9").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
  }
  else if(x1=='X'&&x5=='X'&&x9=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a1").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a9").classList.add("winner")
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
  }
  else if(x3=='X'&&x5=='X'&&x7=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a3").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a7").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x1=='X'&&x4=='X'&&x7=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a1").classList.add("winner")
    document.querySelector("#a4").classList.add("winner")
    document.querySelector("#a7").classList.add("winner")
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a5").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x2=='X'&&x5=='X'&&x8=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a2").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a8").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x3=='X'&&x6=='X'&&x9=='X')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 1 won!"
    document.querySelector("#a3").classList.add("winner")
    document.querySelector("#a6").classList.add("winner")
    document.querySelector("#a9").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a5").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
  }

  else if(x1=='0'&&x2=='0'&&x3=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a1").classList.add("winner")
    document.querySelector("#a2").classList.add("winner")
    document.querySelector("#a3").classList.add("winner")
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a5").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x4=='0'&&x5=='0'&&x6=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a4").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a6").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }

  else if(x7=='0'&&x8=='0'&&x9=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a7").classList.add("winner")
    document.querySelector("#a8").classList.add("winner")
    document.querySelector("#a9").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
  }
  else if(x1=='0'&&x5=='0'&&x9=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a1").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a9").classList.add("winner")
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
  }
  else if(x3=='0'&&x5=='0'&&x7=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a3").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a7").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x1=='0'&&x4=='0'&&x7=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a1").classList.add("winner")
    document.querySelector("#a4").classList.add("winner")
    document.querySelector("#a7").classList.add("winner")
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a5").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a8").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x2=='0'&&x5=='0'&&x8=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a2").classList.add("winner")
    document.querySelector("#a5").classList.add("winner")
    document.querySelector("#a8").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a3").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a6").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a9").disabled=true;
  }
  else if(x3=='0'&&x6=='0'&&x9=='0')
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Player 2 won!"
    document.querySelector("#a3").classList.add("winner")
    document.querySelector("#a6").classList.add("winner")
    document.querySelector("#a9").classList.add("winner")
    document.querySelector("#a1").disabled=true;
    document.querySelector("#a2").disabled=true;
    document.querySelector("#a4").disabled=true;
    document.querySelector("#a5").disabled=true;
    document.querySelector("#a7").disabled=true;
    document.querySelector("#a8").disabled=true;
  }

  else if ((x1=='X'||x1=='0')&&(x2=='X'||x2=='0')&&(x3=='X'||x3=='0')&& (x4=='X'||x4=='0')&&(x5=='X'||x5=='0')&&(x6=='X'||x6=='0')&&(x7=='X'||x7=='0')&&(x8=='X'||x8=='0')&&(x9=='X'||x9=='0'))
  {
    var k=document.querySelector(".play")
    k.classList.add("Pressed")
    k.innerHTML="Tie!! Press Reset to start again"
  }

}

function reset()
{
 location.reload();
  var len =document.querySelectorAll(".btn").length;
  for(var i=0;i<len;i++)
  {
   document.querySelectorAll(".btn")[i].value=" "
  }
  for(var j=0;j<len;j++)
  {
   document.querySelectorAll(".btn")[j].disabled=false
  }
  flag=0;
  document.querySelector(".play").classList.remove("Pressed")
  document.querySelector(".play").innerHTML="Turn of Player 1🧍‍♂️"

}
