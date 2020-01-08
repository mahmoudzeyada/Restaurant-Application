import { Component, OnInit, ɵConsole } from "@angular/core";
import { ActivatedRoute, Data, Router } from "@angular/router";
import { RecipeService } from "../recipes.service";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Recipe } from "../recipes.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  selectedRecipe: Recipe;
  idParam: number;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.editMode = data.recipe != null;
      this.selectedRecipe = data.recipe;
    });
    this.route.params.subscribe((data: Data) => {
      this.idParam = data.name;
    });
    this.initForm();
  }

  getRandomIdName(index): number {
    return (this.form.get("ingredients") as FormArray).at(index).value.idName;
  }

  getRandomIdAmount(index): number {
    return (this.form.get("ingredients") as FormArray).at(index).value.idAmount;
  }

  onAdd() {
    const newIngredient = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*/)
      ]),
      idName: new FormControl(Math.random()),
      idAmount: new FormControl(Math.random())
    });
    (this.form.get("ingredients") as FormArray).push(newIngredient);
  }

  onRemove(index: number) {
    (this.form.get("ingredients") as FormArray).removeAt(index);
  }
  onCancel() {
    this.router.navigate(["/"], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.idParam, this.form.value);
    } else {
      this.recipeService.addRecipe(this.form.value);
    }
    this.router.navigate(["/"], { relativeTo: this.route });
  }
  initForm() {
    let recipeName = "";
    let recipeDescription = "";
    let recipeImagePath = "";
    let ingredients = new FormArray([]);

    if (this.editMode) {
      recipeName = this.selectedRecipe.name;
      recipeDescription = this.selectedRecipe.description;
      recipeImagePath = this.selectedRecipe.imagePath;
      if (this.selectedRecipe["ingredients"]) {
        this.selectedRecipe.ingredients.forEach(ingredient => {
          ingredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*/)
              ]),
              idName: new FormControl(Math.random()),
              idAmount: new FormControl(Math.random())
            })
          );
        });
      }
    }

    this.form = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      ingredients
    });
  }
}
