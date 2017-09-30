import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  message: string = '';

  constructor(public router: Router, public recipesService: RecipesService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.recipe = this.recipesService.getRecipe(this.route.snapshot.params['id'])
    this.route.params.subscribe(
      (params: Params) => {
            this.recipe = this.recipesService.getRecipe(params['id'])
      }
    );
  }

  toggleFavourite() {
    //this should be moved to service.
    this.recipe.favourite = !this.recipe.favourite;
  }

  delete() {
    if(this.recipesService.deleteRecipe(this.recipe.id)){
      this.router.navigate(['/recipes']);
    } else {
      let message = "Form is not valid."
    }
  }

}
