import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { BlankComponent } from './recipes/blank/blank.component';
import { RecipesService } from './recipes/recipes.service';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    IngredientComponent,
    NavbarComponent,
    RecipeEditComponent,
    BlankComponent,
    RecipeAddComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
