import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-gamecontrol",
  templateUrl: "./gamecontrol.component.html",
  styleUrls: ["./gamecontrol.component.css"]
})
export class GamecontrolComponent implements OnInit {
  @Output() startCount = new EventEmitter<number>();
  @Output() stopCount = new EventEmitter();
  counter = 0;
  constructor() {}

  interval: any;

  ngOnInit() {}

  onStart(): void {
    this.interval = setInterval(() => {
      this.startCount.emit(this.counter++);
    }, 1000);
  }

  onStop(): void {
    clearInterval(this.interval);
  }
}
