import { Coach } from "./coach";
import { cricketCoach } from "./cricketCoach";
import { golfCoach } from "./golfCoach";

let myCricketCoach = new cricketCoach();
let myGolfCoach = new golfCoach();

//declare an array for coaches initillaly empty

let theCoaches: Coach[] = [];


// add a coaches to an array

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);


for(let coach of theCoaches){
    console.log(coach.getDailyWorkout());
}