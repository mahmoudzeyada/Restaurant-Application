import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "./recipes.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: []
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  constructor() {}
  ingredient = [];
}
