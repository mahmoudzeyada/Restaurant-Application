import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-formvalidation",
  templateUrl: "./formvalidation.component.html",
  styleUrls: ["./formvalidation.component.css"]
})
export class FormvalidationComponent implements OnInit {

  genders =  ["female", "male"];
  forbiddenName = ["nora", "safaa"]
  signUpForm: FormGroup
  constructor() {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    })
  }

  onAddHobby(){
    const hobbyFormControl = new FormControl(null, Validators.required);
    (this.signUpForm.get('hobbies') as FormArray).push(hobbyFormControl);
  }

  forbiddenNames(control: FormControl): {[s:string]: boolean} {
    if (this.forbiddenName.indexOf(control.value) != -1){
      return {'nameIsForbidden': true}
    }
    return null;
  }


}
