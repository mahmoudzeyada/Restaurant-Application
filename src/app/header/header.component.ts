import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { RecipeService } from "../recipes/recipes.service";
import { AppService } from "../app.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isOpen = false;
  isAuthenticated = false;
  userSub: Subscription;
  constructor(
    private recipesService: RecipeService,
    private appService: AppService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user$.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSave() {
    this.appService.showSavingSpinner.next(true);
    this.recipesService.saveRecipe().subscribe(() => {
      this.appService.showSavingSpinner.next(false);
    });
  }

  onFetch() {
    this.appService.showSavingSpinner.next(true);
    this.recipesService.fetchRecipe().subscribe(data => {
      this.recipesService.setRecipes = data;
      this.appService.showSavingSpinner.next(false);
    });
  }

  onLogOut() {
    this.authService.logOut();
  }
}
