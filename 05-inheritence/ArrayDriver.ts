import { shape } from "./shape";
import { circle } from "./circle";
import { rectangle } from "./rectangle";

let myShape = new shape(10,15);
let myCircle = new circle(10, 5,20 );
let myRectangle = new rectangle(0,0,3,7);

// declare an array of shape

let theShapes: shape[] = [];

// let's add some shapes to array

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);


for(let shape of theShapes){
    console.log(shape.getInfo());
}