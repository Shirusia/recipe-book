import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.sass']
})
export class RecipeAddComponent implements OnInit {
  @ViewChild('idInput') idInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  message: string = '';

  constructor(public router: Router, public recipesService: RecipesService) { }

  ngOnInit() {
  }

  add () {
    if (this.recipesService.addRecipe(this.idInputRef.nativeElement.value, this.nameInputRef.nativeElement.value)){
      this.router.navigate(['/recipes'])
    } else {
      this.message = "Recipe with this id exits."
    }
  }

}
