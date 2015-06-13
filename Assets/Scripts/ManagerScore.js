#pragma strict
var countdown: int=60;
public var enemy1 : GameObject;
public var enemy2 : GameObject;
var counthoya: boolean = true;
public static var   points: int;
public var player: GameObject;
public static  var gameTime : int = 60  ;
public var timez: int =60;
public var enemy3 : GameObject;
var countd: AudioClip;
  private var asteroid2 : Asteroid;
  private var asteroid3 : Asteroid;
private var playerscript: Player;

private var sound: AudioSource;
private var asteroid1 : Asteroid;
function Awake(){
sound = GetComponent(AudioSource);
asteroid3 = enemy3.GetComponent("Asteroid");
asteroid1 = enemy1.GetComponent("Asteroid");
asteroid2 = enemy2.GetComponent("Asteroid");
playerscript = player.GetComponent("Player");

}

function Start () {
gameTime = 60;

InvokeRepeating("count", 1f,1f);
InvokeRepeating("count1",1f,1f);
InvokeRepeating("c",1f,1f);
}

function Update () {
points = asteroid1.score + asteroid2.score + asteroid3.score;
if(playerscript.lives == 0){
CancelInvoke("count");}
if(countdown == -1 && playerscript.lives > 0){
Application.LoadLevel("Win");
}
print(asteroid1.score);

print(asteroid2.score);
if(gameTime == 10 && counthoya){
counthoya = false;
sound.clip = countd;
sound.Play();}


}
function count(){
gameTime -=1;
if(gameTime == 0){
CancelInvoke("count");}}

function count1(){
timez -=1;
if(timez == -1){
CancelInvoke("count1");}

}
function c(){
countdown -=1;
if(countdown==-2)
{CancelInvoke("c");}}

function OnGUI(){
GUI.Label(Rect(10,10,100,20), "Score: " + points);
GUI.Label(Rect(10,25,100,20), "Health: " + playerscript.lives);
GUI.Label(Rect(Screen.width - 100, 10,100,20),"Counter: " + gameTime);
}