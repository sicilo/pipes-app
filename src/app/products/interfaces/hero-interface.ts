export enum Color {
    red,
    white,
    yellow,
    blue,
    green
}

export interface Hero {
    name:string,
    canFly:boolean,
    color: Color
}