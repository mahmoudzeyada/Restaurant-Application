import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { ShoppingListService } from "../shoppinglist.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  form: FormGroup
  selectedIngredientSub: Subscription;
  selectedIngredient: number
  editMode = false
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });

    this.selectedIngredientSub = this.shoppingListService.ingredientSelected$.subscribe((index) => {
      const selectedIngredient = this.shoppingListService.allIngredient[index];
      this.selectedIngredient = index
      this.editMode = true;
      this.form.setValue({
        name: selectedIngredient.name,
        amount: selectedIngredient.amount
      })
    })

  }

  onAdd() {
    const name: string = this.form.get('name').value;
    const amount: number = +this.form.get('amount').value
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.selectedIngredient, {name, amount})
    }
    else {
      this.shoppingListService.addIngredient({ name, amount });
    }
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.form.reset();

  }
  onDelete() {
    const name: string = this.form.get('name').value;
    const amount: number = +this.form.get('amount').value
    this.shoppingListService.removeIngredient(name, amount);
    this.onClear();
  }
  ngOnDestroy(){
    this.selectedIngredientSub.unsubscribe();
  }
}
