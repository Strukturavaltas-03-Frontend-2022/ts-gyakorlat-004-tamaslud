// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: any[] = [
    {id: 1, name: "Batman", sex:"male", age:40, health: 100},
    {id: 2, name: "Superman", sex:"male", age:200, health: 100},
    {id: 3, name: "Wonder Woman", sex:"female", age:30, health: 100},
];

/*
        public id: number, 
        public name: string, 
        public sex: string,
        public age: number,
        public health: number, 
        public photo?: string,
*/


/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [
    {id:1, name:"Optimus", wings:0, wheels:4, clan:"Autobots"},
    {id:2, name:"Megatron", wings:0, wheels:0, clan:"Decepticons"},
    {id:1, name:"Bublebee", wings:0, wheels:4, clan:"Autobots"},
];

/*
        public id: number,
        public name: string,
        public wings: number,
        public wheels: number,
        public clan: string,
        public photo?: string,
*/