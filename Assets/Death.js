#pragma strict
var counter: int =0;
public var end: AudioClip;
public var blowup : AudioClip;
public var  player : GameObject;
private var playerscript: Player;
private var source: AudioSource;
private var played : boolean = true;

function Awake() {
source = GetComponent(AudioSource);
playerscript = player.GetComponent(Player);
}

function Start(){
}


function Update () {

if(playerscript.lives == 0 && played){
InvokeRepeating("count",1f,1f);
source.clip = blowup;
played = false;
source.Play();}

}


function count(){
counter += 1;
if(counter == 2){
source.clip = end;
source.Play();}}