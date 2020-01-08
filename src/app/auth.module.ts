import { NgModule } from "@angular/core";
import { SharedModule } from "./shared.module";
import { AuthComponent } from "./auth/auth.component";
import { AlertComponent } from "./alert/alert.component";
import { AuthRoutingModule } from "./auth/auth-routing.module";

@NgModule({
  declarations: [AuthComponent, AlertComponent],
  imports: [SharedModule, AuthRoutingModule]
})
export class AuthModule {}
