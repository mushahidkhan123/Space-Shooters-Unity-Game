#pragma strict
public var rocketSpeed : int = 7;
function Start () {

}

function Update () {

transform.Translate(0,  0,rocketSpeed * Time.deltaTime);

if(transform.position.y >= 6){
Destroy(gameObject);


}
}

function OnTriggerEnter(other: Collider){

if(other.gameObject.tag == "asteroid"){
Destroy(gameObject);}}