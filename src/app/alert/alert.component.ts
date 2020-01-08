import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AlertService } from "./alert.service";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit {
  // @Input()
  // message: string;
  // @Output()
  // close: EventEmitter<any> = new EventEmitter<any>();
  constructor(private alertService: AlertService) {}

  ngOnInit() {}

  onClose() {
    // this.close.emit(null);
    this.alertService.err = null;
  }
}
