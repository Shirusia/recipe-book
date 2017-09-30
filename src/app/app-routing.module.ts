import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';
import { BlankComponent } from './recipes/blank/blank.component';

const appRoutes: Routes = [
    { path: 'recipes/add', component: RecipeAddComponent },
    { path: 'recipes/:id/details', component: RecipeDetailsComponent },
    { path: 'recipes/:id/edit', component: RecipeEditComponent },
    { path: 'recipes', component: BlankComponent },
    { path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    { path: '**', redirectTo:'recipes'}
];
  
@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}