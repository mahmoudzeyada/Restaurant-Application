import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-formvalidation",
  templateUrl: "./formvalidation.component.html",
  styleUrls: ["./formvalidation.component.css"]
})
export class FormvalidationComponent implements OnInit {
  reply: "";

  genders: ["male", "female"];
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
