import { Recipe } from "./recipes.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Subject, Observable } from "rxjs";
import { tap, map, take, exhaustMap } from "rxjs/operators";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];

  private url = "https://vue-learn-e60ae.firebaseio.com/recipes.json";

  constructor(
    private shoppingListService: ShoppingListService,
    private http$: HttpClient
  ) {}

  recipeChanged$ = new Subject<Recipe[]>();

  //save request
  saveRecipe(): Observable<Recipe[]> {
    return this.http$.put<Recipe[]>(this.url, this.recipes);
  }

  //fetch request
  fetchRecipe(): Observable<Recipe[]> {
    return this.http$.get<Recipe[]>(this.url).pipe(
      map(recipes =>
        recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        })
      ),
      tap(data => (this.recipes = data))
    );
  }
  get allRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  set setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged$.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged$.next(this.recipes.slice());
  }

  updateRecipe(recipeId: number, recipe: Recipe) {
    this.recipes[recipeId] = recipe;

    this.recipeChanged$.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipeChanged$.next(this.recipes.slice());
  }
}
