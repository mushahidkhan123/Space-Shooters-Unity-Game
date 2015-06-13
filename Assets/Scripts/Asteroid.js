#pragma strict
public var speed: float = 6f;
public var explodez: AudioClip;
public var upBound : float;
public var explosion : Transform;
public   var score: int = 0;
public var hitseconds : int =2;
private var sound: AudioSource;
 function Awake(){
 sound = GetComponent(AudioSource);
 }
function Start () {
 
 sound.clip = explodez;
}

function Update () {

transform.Translate(0, -speed * Time.deltaTime,0);
transform.position.z=0;
 
if(transform.position.y <= -6.5){
transform.position.y = upBound;
transform.position.x = Random.Range(-6.2, 6.27);

}}


function OnTriggerEnter(other : Collider){

if(other.gameObject.tag == "fire"){
	if(ManagerScore.gameTime == 0){
		score +=0;}
		else{
var ex= Instantiate(explosion, transform.position  , transform.rotation);
ex.transform.Translate(0, -speed * Time.deltaTime,0);
 sound.Play();
transform.position.y = upBound;
transform.position.x = Random.Range(-6.2, 6.27);
score +=1;}}
else if(other.gameObject.tag == "shield"){ 
Instantiate(explosion, transform.position, transform.rotation);
sound.Play();
transform.position.y = upBound;
transform.position.x = Random.Range(-6.2, 6.27);}

 
else if(other.gameObject.tag == "Player"){
 
other.GetComponent(Player).lives -=10;
Instantiate(explosion, transform.position, transform.rotation);
sound.Play();
transform.position.y = upBound;
transform.position.x = Random.Range(-6.2, 6.27);
}
 
}


 

