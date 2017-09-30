import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Ingredient } from '../../Ingredient/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('unitInput') unitInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  recipe: Recipe;
  ingredients: string[] = [
    "meat", "apple", "banana"
  ]

  constructor(public router: Router, public recipesService: RecipesService, private route: ActivatedRoute ) { }

  ngOnInit() {
    //here I want work on copy element and with form, but I don't have time on it :D
    let id = this.route.snapshot.params['id'];
    if (id){
       this.recipe =  Object.assign({}, this.recipesService.getRecipe(id))
    } else {
       this.router.navigate(['/recipes']);
    }
    this.route.params.subscribe(
      (params: Params) => {
            this.recipe = this.recipesService.getRecipe(params['id'])
      }
    );
  }

  back () {
    this.router.navigate(['/recipes'])
  }

  //this should be in sepatete component with event emitter
  add(selectValue: string) {
    let ingredient = new Ingredient (selectValue, this.amountInputRef.nativeElement.value, this.unitInputRef.nativeElement.value)
    this.recipe.ingredients.push(ingredient);
    let sum:number = 0;
    for (let i of this.recipe.ingredients) {
      sum = sum + Number(i.amount); 
    }
    if (sum > 1000) {
      this.recipe.bigAmount = true;
    } else {
      this.recipe.bigAmount = false;
    }
  }

}
