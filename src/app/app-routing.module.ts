import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { AuthGuard } from "./authGard.service";
import { CanDeactivateGuard } from "./canDeactivateGuard.service";
import { ServerResolver } from "./server/server-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppinglistComponent } from "./shopping-list/shoppinglist.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeResolver } from "./recipes/recipes-detail/recipes-resolver.service";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { FormvalidationComponent } from "./formvalidation/formvalidation.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  },
  {
    path: "recipes",
    component: RecipesComponent,
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
      }
    ]
  },
  {
    path: "shopping-list",
    component: ShoppinglistComponent
  },
  {
    path: "**",
    component: FormvalidationComponent,
    data: { message: "sorry page not found" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
