import { NgModule } from "@angular/core";
import { ShoppinglistComponent } from "./shopping-list/shoppinglist.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { SharedModule } from "./shared.module";
import { ShoppingListRoutingModule } from "./shopping-list/shoppinglist-routing.module";

@NgModule({
  imports: [SharedModule, ShoppingListRoutingModule],
  declarations: [ShoppinglistComponent, ShoppingEditComponent]
})
export class ShoppingListModule {}
