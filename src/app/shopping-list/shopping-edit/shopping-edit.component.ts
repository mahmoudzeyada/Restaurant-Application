import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ShoppingListService } from "../shoppinglist.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: true }) nameInput: ElementRef;
  @ViewChild("amountInput", { static: true }) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAdd() {
    const name = this.nameInput.nativeElement.value;
    const amount = parseInt(this.amountInput.nativeElement.value, 10);
    this.shoppingListService.addIngredient({ name, amount });
  }

  onDelete() {
    const name = this.nameInput.nativeElement.value;
    const amount = parseInt(this.amountInput.nativeElement.value, 10);
    this.shoppingListService.removeIngredient(name, amount);
  }
}
