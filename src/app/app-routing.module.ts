import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  },
  {
    path: "recipes",
    loadChildren: "../app/recipes.module#RecipesModule"
  },
  {
    path: "auth",
    loadChildren: "../app/auth.module#AuthModule"
  },
  {
    path: "shopping-list",
    loadChildren: "../app/shoppinglist.module#ShoppingListModule"
  },
  {
    path: "**",
    component: NotFoundPageComponent,
    data: { message: "sorry page not found" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
