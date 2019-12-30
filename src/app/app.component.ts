import { Component } from "@angular/core";

import { ServersService } from "./servers/servers.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ServersService]
})
export class AppComponent {
  title = "angualr-learn";
  servers = [];
  element = 0;
  rec = false;
  shop = false;

  onBlue(serverData: {
    serverType: string;
    serverName: string;
    serverContent: string;
  }) {
    this.servers.push({
      type: serverData.serverType,
      content: serverData.serverContent,
      name: serverData.serverName
    });
  }

  onNormal(serverData: {
    serverType: string;
    serverName: string;
    serverContent: string;
  }) {
    this.servers.push({
      type: serverData.serverType,
      content: serverData.serverContent,
      name: serverData.serverName
    });
  }

  toggleRec(rec: boolean): void {
    this.rec = true;
    this.shop = false;
  }

  toggleShop(rec: boolean): void {
    this.rec = false;
    this.shop = true;
  }
}
