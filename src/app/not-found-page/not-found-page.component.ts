import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

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

    const observable = new Observable(subscriber => {
      let counter = 0;
      setInterval(() => {
        subscriber.next(counter);
        counter++;
        if (counter > 3) {
          subscriber.error("greater than 3");
        }
      }, 500);
    });

    observable.pipe(map((data: number) => `round:${data + 1}`)).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("done");
      }
    );    
  }
}
