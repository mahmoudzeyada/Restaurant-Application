import { AbstractControl } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shoppinglist.service';


export function ingredientExists(control: AbstractControl): {[s:string]: boolean} {
 if (((this.shoppingListService) as ShoppingListService).allIngredient.indexOf(control.value) == -1) {
    return {'notFound': true}
 }
 return null
}
