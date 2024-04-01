"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketCoach_1 = require("./cricketCoach");
const golfCoach_1 = require("./golfCoach");
let myCricketCoach = new cricketCoach_1.cricketCoach();
let myGolfCoach = new golfCoach_1.golfCoach();
//declare an array for coaches initillaly empty
let theCoaches = [];
// add a coaches to an array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}
