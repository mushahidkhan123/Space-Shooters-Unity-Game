#pragma strict

var x = 2;
var y = 50;


function OnGUI(){
GUI.BeginGroup(Rect(Screen.width/x-y, Screen.height/x-y,900,400));
GUI.Box(Rect(0,0,225,200), "Instructions");
GUI.Label(Rect(10,30,140,40), "* Arrow Keys To Move");
GUI.Label(Rect(10,60,140,40), "* Space Bar To Shoot");
GUI.Label(Rect(10,90,200,80), "* E for Shield(Shield is active only for 5 seconds and needs 10 seconds to recharge)");

if(GUI.Button(Rect(10,150,140,40),"Main Menu") ){
Application.LoadLevel("Main Menu");}

GUI.EndGroup();}