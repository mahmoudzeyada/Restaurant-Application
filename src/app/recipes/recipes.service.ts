import { Recipe } from "./recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Hampurger",
      "tasty hampruger",
      "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg",
      [new Ingredient("bread", 1), new Ingredient("cheese", 2)]
    ),
    new Recipe(
      "Shrimps",
      "tasty shrimps",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
      [new Ingredient("shrimp", 5), new Ingredient("salad", 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  get allRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(name) {
    return this.recipes.find(recipe => recipe.name === name);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
