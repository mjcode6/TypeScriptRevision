import { Coach } from "./coach";

export class cricketCoach implements Coach{
    getDailyWorkout(): string {
        return "practice your spin bowling regularly.";
    }

}