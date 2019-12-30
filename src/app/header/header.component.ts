import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() recFired = new EventEmitter();
  @Output() shopFired = new EventEmitter();
  isOpen = false;

  constructor() {}

  ngOnInit() {}

  onRec(): void {
    this.recFired.emit();
  }

  onShop(): void {
    this.shopFired.emit();
  }
}
