#pragma strict


public var alarmSound : AudioClip;
public var  player : GameObject;
private var playerscript: Player;
private var source: AudioSource;
private var played : boolean = false;
private var isDead : boolean = true;
function Awake() {
source = GetComponent(AudioSource);
playerscript = player.GetComponent(Player);
}

function Update () {

if(playerscript.lives == 10 && !played){
source.clip = alarmSound;
played = true;
source.Play();}

if(playerscript.lives == 0 && isDead){
isDead = false;
source.Stop();}

}
