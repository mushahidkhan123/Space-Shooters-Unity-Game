#pragma strict
var go : GameObject;
private var player : Player;

function Awake(){
go = gameObject.FindGameObjectWithTag("Player");
player = go.GetComponent(Player);
}

function Start () {

}

function Update () {
if(player.x == -1){
renderer.enabled = false;}
else if (player.x == 1){
renderer.enabled = true;}

}