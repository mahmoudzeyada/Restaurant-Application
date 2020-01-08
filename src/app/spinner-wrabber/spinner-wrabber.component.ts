import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecipeService } from "../recipes/recipes.service";
import { Subscription } from "rxjs";
import { AppService } from "../app.service";

@Component({
  selector: "app-spinner-wrabber",
  templateUrl: "./spinner-wrabber.component.html",
  styleUrls: ["./spinner-wrabber.component.css"]
})
export class SpinnerWrabberComponent implements OnInit, OnDestroy {
  showingSpinner: Subscription;
  showSpinner = false;
  constructor(
    private recipesService: RecipeService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.showingSpinner = this.appService.showSavingSpinner.subscribe(
      isShowing => (this.showSpinner = isShowing)
    );
  }

  ngOnDestroy() {
    this.showingSpinner.unsubscribe();
  }
}
