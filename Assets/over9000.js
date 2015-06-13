#pragma strict
var score: GameObject;
var aud: AudioClip;
private var source: AudioSource;
private var ss:ManagerScore;

function Awake(){
source = GetComponent(AudioSource);
ss = score.GetComponent("ManagerScore");}


function Start () {

}

function Update () {
if(ss.points > 1000){
print("POPOPO");
source.clip = aud;
source.Play();


}}