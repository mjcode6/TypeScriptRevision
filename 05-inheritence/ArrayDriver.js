"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let myShape = new shape_1.shape(10, 15);
let myCircle = new circle_1.circle(10, 5, 20);
let myRectangle = new rectangle_1.rectangle(0, 0, 3, 7);
// declare an array of shape
let theShapes = [];
// let's add some shapes to array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let shape of theShapes) {
    console.log(shape.getInfo());
}
