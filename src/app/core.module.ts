import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shoppinglist.service";
import { RecipeService } from "./recipes/recipes.service";
import { RecipeResolver } from "./recipes/recipes-detail/recipes-resolver.service";
import { RecipesResolver } from "./recipes/recipes-reslover.serivce";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeResolver,
    RecipesResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
