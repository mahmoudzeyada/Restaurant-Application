import { Component, OnInit } from "@angular/core";
import { FakeAuth } from "../authFake.service";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  constructor(private fakeAuth: FakeAuth, private route: ActivatedRoute) {}

  ngOnInit() {}

  onLogIn() {
    this.fakeAuth.logIn();
  }

  onLogOut() {
    this.fakeAuth.logOut();
  }
}
