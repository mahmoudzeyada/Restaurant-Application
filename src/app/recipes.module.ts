import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesItemComponent } from "./recipes/recipes-list/recipes-item/recipes-item.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { DefaultEditPageComponent } from "./recipes/default-edit-page/default-edit-page.component";
import { RecipesRoutingModule } from "./recipes/recipes-routing.module";
import { SharedModule } from "./shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    RecipeEditComponent,
    DefaultEditPageComponent
  ],
  imports: [SharedModule, RouterModule, RecipesRoutingModule],
  exports: []
})
export class RecipesModule {}
