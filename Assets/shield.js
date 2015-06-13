#pragma strict
 var aud : AudioClip;
 var source: AudioSource;
 
 var shieldtimer = 6;
 
 function Awake(){
 source = GetComponent("AudioSource");}
 
 function Start(){
source.clip=aud;
source.Play();
 InvokeRepeating("count",1f,1f);}
 
  
 function Update(){
  
 if(shieldtimer  == 0){
  
 Destroy(gameObject);}}
 
 function count(){
 shieldtimer -=1;
 if(shieldtimer == 0){

 CancelInvoke("count");}}