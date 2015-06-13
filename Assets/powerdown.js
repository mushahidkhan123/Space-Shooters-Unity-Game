#pragma strict
var player: GameObject;
private var ps: Player;
var aud:AudioClip;
private var source:AudioSource;

function Awake(){
ps = player.GetComponent("Player");
source = GetComponent("AudioSource");
}

function Start () {

}

function Update () {


if(ps.shieldtime <= 11 && ps.shieldtime >=10){
print("PPPPPPPPP");
source.clip = aud;
source.Play();

}}