import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesItemComponent } from "./recipes/recipes-list/recipes-item/recipes-item.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { ShoppinglistComponent } from "./shopping-list/shoppinglist.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerComponent } from "./servers/server/server.component";
import { GamecontrolComponent } from "./gamecontrol/gamecontrol.component";
import { EvenComponent } from "./even/even.component";
import { OddComponent } from "./odd/odd.component";
import { DirectivesComponent } from "./directives/directives.component";
import { AppHighLightDirective } from "./highlight.directive/hightlight.directive";
import { BetterHighlightDirective } from "./better-highlight.directive";
import { UnlessDirective } from "./unless.directive";
import { AppDropDownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./shopping-list/shoppinglist.service";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { AuthGuard } from "./authGard.service";
import { FakeAuth } from "./authFake.service";
import { CanDeactivateGuard } from "./canDeactivateGuard.service";
import { ServerResolver } from "./server/server-resolver.service";
import { ServersService } from "./servers/servers.service";
import { RecipeService } from "./recipes/recipes.service";
import { RecipeResolver } from "./recipes/recipes-detail/recipes-resolver.service";
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    ShoppinglistComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerComponent,
    GamecontrolComponent,
    EvenComponent,
    OddComponent,
    DirectivesComponent,
    AppHighLightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AppDropDownDirective,
    UsersComponent,
    HomeComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    NotFoundPageComponent,
    RecipeEditComponent,
    FormvalidationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AppRoutingModule],
  providers: [ShoppingListService, RecipeService, RecipeResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
