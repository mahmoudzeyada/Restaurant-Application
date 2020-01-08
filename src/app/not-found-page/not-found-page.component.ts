import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { Observable, Subject, BehaviorSubject, of, interval } from "rxjs";
import { map, take, concatMap } from "rxjs/operators";

@Component({
  selector: "app-not-found-page",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.css"]
})
export class NotFoundPageComponent implements OnInit {
  errorMessage = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data.message;
      console.log(data.message);
    });

    console.log("hi");
    let ranNum = new BehaviorSubject<number>(null);

    ranNum.subscribe(num => console.log("observer1" + " " + num));
    ranNum.subscribe(num => console.log("observer2" + " " + num));
    ranNum.subscribe(num => console.log("observer3" + " " + num));

    ranNum.pipe(take(1)).subscribe(num => console.log("observer4" + " " + num));

    ranNum.next(1);
    ranNum.next(2);
  }
}
