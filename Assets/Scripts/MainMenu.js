#pragma strict
public var customGuiStyle : GUIStyle;

 var a:float =.84;
 var b:float=1.06;
  var c:float =0.02;
 var d:float=0.13;
  var e:float=0.02;
 var f:float=0.26;
 var g:float=0.02;
 var h:float=0.39;
 var i:float;
 var j:float;
 var k:float;
  var i1:float;
 var j1:float;
 var k1:float;
 var aa:float;
 var bb:float;
 function OnGUI () {

GUI.BeginGroup(Rect(Screen.width*aa,Screen.height*bb,Screen.width*a,Screen.height*b));

GUI.Box(Rect(0,0,Screen.width/3*a,Screen.height/2*b), "Space Shooter",customGuiStyle);


if(GUI.Button(Rect(Screen.width*c,Screen.height*d,Screen.width*i,Screen.height*i1),"Start Game")){
Application.LoadLevel("scene1");}

if(GUI.Button(Rect(Screen.width*e,Screen.height*f,Screen.width*j,Screen.height*j1), "Help")){
Application.LoadLevel("Help");}
 


GUI.EndGroup ();
}