import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AppService } from "../app.service";
import { Observable } from "rxjs";
import { AuthResponse } from "./auth.model";
import { AlertService } from "../alert/alert.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  isSignInMode = false;
  err: string = null;
  auth$: Observable<AuthResponse>;
  constructor(
    private authService: AuthService,
    private appService: AppService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      if (form.controls.email.invalid) {
        this.err = "email is invalid or required";
      }
      if (form.controls.password.invalid) {
        this.err = "password is invalid or required";
      }
      return;
    }
    this.appService.showSavingSpinner.next(true);
    if (!this.isSignInMode) {
      this.auth$ = this.authService.signUp(form.value);
    } else {
      this.auth$ = this.authService.signIn(form.value);
    }
    this.auth$.subscribe(
      data => {
        this.appService.showSavingSpinner.next(false);
        console.log(data);
      },
      err => {
        this.appService.showSavingSpinner.next(false);
        this.err = err;
        this.alertService.err = err;
      }
    );

    form.reset();
  }
}
