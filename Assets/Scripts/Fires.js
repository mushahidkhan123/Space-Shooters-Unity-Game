#pragma strict
public var ship: GameObject;
public var fireActive: int;



function Start () {
renderer.enabled = false;
}

function Update () {
if(ship.GetComponent(Player).lives == fireActive){
print(ship.GetComponent(Player).lives);
renderer.enabled=true;

}}