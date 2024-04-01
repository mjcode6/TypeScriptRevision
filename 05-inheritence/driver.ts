import { shape } from "./shape";
import { circle } from "./circle";
import { rectangle } from "./rectangle";

let myShape = new shape(10,15);
console.log(myShape.getInfo());

let myCircle = new circle(10, 5,20 );
console.log(myCircle.getInfo());


let myRectangle = new rectangle(0,0,3,7);
console.log(myRectangle.getInfo());
