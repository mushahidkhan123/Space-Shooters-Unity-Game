#pragma strict

var a:float =1.05;
 var b:float=.86; 
  var c:float =0.02;
 var d:float=0.1;
  var e:float=0.02;
 var f:float=0.26;
 var g:float=0.02;
 var h:float=0.45;
 var i:float=.31;
 var j:float=.3;
 var k:float=.3;
  var i1:float=.12;
 var j1:float=.15;
 var k1:float=.15;
 var aa:float=.27;
 var bb:float=.17;
function OnGUI(){
GUI.BeginGroup(Rect(Screen.width*aa,Screen.height*bb,Screen.width*a,Screen.height*b));

GUI.Box(Rect(0,0,Screen.width/3*a,Screen.height/2*b), "Ship Blown Up, You Lose");


if(GUI.Button(Rect(Screen.width*c,Screen.height*d,Screen.width*i,Screen.height*i1),"Play Again")){
Application.LoadLevel("scene1");}

if(GUI.Button(Rect(Screen.width*e,Screen.height*f,Screen.width*j,Screen.height*j1), "Main Menu")){
Application.LoadLevel("Main Menu");}

 


GUI.EndGroup ();
}