#pragma strict
public var rocketSpeed : int = 11;
public var direction : int;
function Start () {

}

function Update () {

transform.Translate(rocketSpeed * Time.deltaTime * direction,  0,0);

if(transform.position.x >= 6 || transform.position.y <= -7.59){
Destroy(gameObject);


}
}

function OnTriggerEnter(other: Collider){

if(other.gameObject.tag == "asteroid"){
Destroy(gameObject);}}