import {Ingredient} from '../ingredient/ingredient.model'
export class Recipe {
    public id: number;
    public name: string;
    public bigAmount: boolean;
    public favourite: boolean;
    public ingredients: Ingredient[];

    constructor (id:number, name: string, bigAmount:boolean, favourite:boolean, integredients: Ingredient[] ){
        this.id = id;
        this.name = name;
        this.bigAmount = bigAmount;
        this.favourite = favourite;
        this.ingredients = integredients;
    }
}