import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

import { SpinnerComponent } from "./spinner/spinner.component";
import { SpinnerWrabberComponent } from "./spinner-wrabber/spinner-wrabber.component";

import { CoreModule } from "./core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundPageComponent,
    SpinnerComponent,
    SpinnerWrabberComponent
  ],
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
