import { shape } from "./shape";

export class circle extends shape{
    

constructor(theX: number, theY: number, private _radius: number ){
  super(theX, theY);
}

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }


    getInfo(): string {
        return super.getInfo() + `super=${this._radius}`;
    }
}