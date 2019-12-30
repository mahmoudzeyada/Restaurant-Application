import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipes.model";
import { ShoppingListService } from "src/app/shopping-list/shoppinglist.service";
import { Ingredient } from "src/app/shared/ingredient.model";
import { RecipeService } from "../recipes.service";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.component.html",
  styleUrls: ["./recipes-detail.component.css"]
})
export class RecipesDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  isOpen = false;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.selectedRecipe = data.recipe;
    });
  }

  toShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
  }
}
