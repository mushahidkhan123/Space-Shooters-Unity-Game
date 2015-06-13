#pragma strict
var shieldtime:float = 20;
var shieldon: boolean = false;
var beginning: boolean = true;
var shieldready : boolean = true;
public var speedh : float;
public var speedv : float;
public var x: int;
public var rocket : Transform;
public var rocket1: Transform;
public var rocketArea: Transform;
public var rocketArea1: Transform;
public var explosionfinal: Transform;
var shieldInput: KeyCode;
public var lives: int =100;
var shield: Transform;
 private var audsource: AudioSource;
 var laser: AudioClip;
 
  
 
var counter:float =20;
function Start(){
lives = 100;}
function Awake(){
audsource = GetComponent(AudioSource);}
 

function Update () {
var h : float = Input.GetAxis("Horizontal") * speedh * Time.deltaTime;
var v : float = Input.GetAxis("Vertical") * speedv * Time.deltaTime;
 
transform.Translate(h, 0, v);
transform.position.x = Mathf.Clamp(transform.position.x, -8.2,8);
transform.position.y = Mathf.Clamp(transform.position.y, -4.08, 4.31);
 
if(Input.GetKeyDown("space")){
audsource.clip = laser;
audsource.Play(); 
Instantiate(rocket, rocketArea.position, rocketArea.rotation);
Instantiate(rocket1, rocketArea1.position, rocketArea1.rotation);
}

else if( Input.GetKeyDown(shieldInput) &&!shieldon){
 var s = Instantiate(shield, transform.position, transform.rotation);
  s.transform.parent = gameObject.transform;
 shieldon = true;

 
 }
if(shieldon == true){ 
print("ShieldTIME: " +shieldtime);
if(shieldtime >0){
 shieldtime -=Time.deltaTime;
  
 }
 else if(shieldtime <= 0){

shieldtime = 15;
shieldon = false;} }
 
 
 
 
 

 if(lives <= 0){
 
 lives = 0;
 Instantiate(explosionfinal, transform.position,transform.rotation);
 speedh=0;
 speedv=0;
 InvokeRepeating("count",5f,1f);
renderer.enabled=false;
 }

}
 

function count(){
counter -=1;
if(counter ==0){
 

Application.LoadLevel("Loose");
CancelInvoke("count");
}}
 