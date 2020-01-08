import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  DoCheck,
  OnDestroy
} from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipeService } from "../recipes.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipesChangedSub: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.allRecipes;
    this.recipesChangedSub = this.recipeService.recipeChanged$.subscribe(
      recipes => {
        console.log(recipes);
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipesChangedSub.unsubscribe();
  }
}
