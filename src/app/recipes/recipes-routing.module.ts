import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesResolver } from "./recipes-reslover.serivce";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipeResolver } from "./recipes-detail/recipes-resolver.service";
import { DefaultEditPageComponent } from "./default-edit-page/default-edit-page.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    resolve: { recipes: RecipesResolver },
    canActivate: [AuthGuard],
    children: [
      {
        path: "new",
        component: RecipeEditComponent
      },
      {
        path: ":name",
        component: RecipesDetailComponent,
        resolve: { recipe: RecipeResolver }
      },
      {
        path: ":name/edit",
        component: RecipeEditComponent,
        resolve: { recipe: RecipeResolver }
      },
      {
        path: "**",
        component: DefaultEditPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
