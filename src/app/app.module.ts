import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule }    from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/index";
import { FooterComponent } from "./footer/index";
import { BannerComponent } from "./banner/index";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
