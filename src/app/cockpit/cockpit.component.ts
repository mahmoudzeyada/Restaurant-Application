import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  content = "";
  name = "";
  constructor() {}
  @Output() blueEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverType: string;
  }>();
  @Output() normalEvent = new EventEmitter<{
    serverName: string;
    serverContent: string;
    serverType: string;
  }>();

  onBlue() {
    this.blueEvent.emit({
      serverType: "blueprint",
      serverContent: this.content,
      serverName: this.name
    });
    this.content = "";
    this.name = "";
  }

  onNormal(serverNameInput: HTMLInputElement) {
    this.normalEvent.emit({
      serverType: "normal",
      serverContent: this.content,
      serverName: serverNameInput.value
    });
    this.content = "";
    this.name = "";
  }

  ngOnInit() {}
}
