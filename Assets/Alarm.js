#pragma strict
var player : GameObject;
private var sound: AudioSource;
  var death : AudioClip;
 // var alarm: AudioClip;
 private var playerscript: Player;

function Awake(){
sound = GetComponent(AudioSource);
playerscript = player.GetComponent(Player);}


function Start () {

}

function Update () {
if(playerscript.lives == 0){
sound.clip = death;
sound.Play();}

//if(playerscript.lives == 0){
//sound.clip = alarm;
//sound.Play();}
}