import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipes.model";
import { ShoppingListService } from "src/app/shopping-list/shoppinglist.service";
import { Ingredient } from "src/app/shared/ingredient.model";
import { RecipeService } from "../recipes.service";
import { ActivatedRoute, Data, Router } from "@angular/router";

@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.component.html",
  styleUrls: ["./recipes-detail.component.css"]
})
export class RecipesDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeId: number;
  isOpen = false;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.selectedRecipe = data.recipe;
    });

    this.route.params.subscribe((data: Data) => {
      this.recipeId = data.name;
    });
  }

  toShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
  }

  onDelete(id: number) {
    this.recipeService.deleteRecipe(id);
    this.router.navigate(["/recipes"]);
  }
}
