import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { RecipeService } from "./recipes.service";
import { Observable } from "rxjs";

@Injectable()
export class RecipesResolver implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe[]> | Recipe[] {
    if (this.recipeService.allRecipes.length === 0) {
      console.log("hiiiiiiiiiiii");
      return this.recipeService.fetchRecipe();
    }
    return this.recipeService.allRecipes;
  }
}
