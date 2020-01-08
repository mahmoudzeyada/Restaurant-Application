import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("tomato", 10),
    new Ingredient("carrot", 5)
  ];

  ingredientsChanged$ = new Subject<Ingredient[]>();
  get allIngredient(): Ingredient[] {
    return this.ingredients.slice();
  }

  ingredientSelected$ = new Subject<number>();

  updateIngredient(index: number, modifiedIngredient: Ingredient): void {
    this.ingredients[index] = modifiedIngredient;
    this.ingredientsChanged$.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient): void {
    const foundEl = this.ingredients.find(
      item => item.name === ingredient.name
    );

    if (foundEl) {
      foundEl.amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChanged$.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    ingredients.forEach(ingredient => {
      const foundEl = this.ingredients.find(
        item => item.name === ingredient.name
      );
      if (foundEl) {
        return (foundEl.amount += ingredient.amount);
      }
      return this.ingredients.push(ingredient);
    });
    this.ingredientsChanged$.next(this.ingredients.slice());
  }
  removeIngredient(name: string, amount: number): void {
    const index = this.ingredients.findIndex(item => item.name === name);

    if (index !== -1) {
      const selectedIng = this.ingredients[index];
      if (selectedIng.amount <= amount) {
        this.ingredients.splice(index, 1);
      } else {
        selectedIng.amount -= amount;
      }
      this.ingredientsChanged$.next(this.ingredients.slice());
    }
  }

  clearIngredients() {
    this.ingredients = [];
  }
}
