import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../Ingredient/ingredient.model';

@Injectable()
export class RecipesService {
  //mock data
  recipes: Recipe[] = [
    new Recipe (1, 'test recipe', true, true, [new Ingredient ('meat', 3, 'kg'), new Ingredient ('milk', 2, 'l')]),
    new Recipe (2, 'test recipe 2', false, false, []),
    new Recipe (3, 'test recipe 3', false, false, [new Ingredient ('meat', 3, 'kg')])
  ];
  constructor() { }

  getRecipes():  Recipe[] {
        return this.recipes;
  }

  getRecipe(id: number):  Recipe {
        return this.recipes.find(recipe => recipe.id == id)
  }

  deleteRecipe(id: number): boolean {
    let recipe = this.getRecipe(id);
    let index = this.recipes.indexOf(recipe, 0);
    if (index > -1) {
     this.recipes.splice(index, 1);
    }
    return true;
  }

 addRecipe(id: number, name: string):boolean {
   let recipe = this.getRecipe(id)
   if (recipe){
     return false;
   }
   recipe = new Recipe(id, name, false, false, []) 
   this.recipes.push(recipe);
   return true;
 }

}
