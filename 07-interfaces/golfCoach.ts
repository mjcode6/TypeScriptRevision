import { Coach } from "./coach";

export class golfCoach implements Coach{
    getDailyWorkout(): string {
       return "focus on your diet and technice.";
    }

}