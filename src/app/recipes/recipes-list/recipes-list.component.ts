import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../Ingredient/ingredient.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.sass']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(public recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes= this.recipesService.getRecipes();
  }

}
