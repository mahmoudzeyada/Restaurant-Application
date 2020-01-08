import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shoppinglist.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shoppinglist",
  templateUrl: "./shoppinglist.component.html",
  styleUrls: ["./shoppinglist.component.css"],
  providers: []
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  onActive = false;
  igChangedSyb: Subscription;
  selectedRecipe: number = -1;

  @ViewChild('recipesList', {static: false})
  private recipesList: ElementRef<HTMLElement>

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.allIngredient;
    this.igChangedSyb = this.shoppingListService.ingredientsChanged$.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
    this.igChangedSyb.unsubscribe();
  }

  onAdd(index: number) {
    this.selectedRecipe = index;
    this.shoppingListService.ingredientSelected$.next(index);
  }
}
