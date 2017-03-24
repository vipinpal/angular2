import { Component } from "@angular/core";
import "./../assets/css/style.css";

@Component({
  selector: "my-app",
  template: `<h1>Hello from Angular App with Webpack</h1>`,
  styleUrls: [` {
  padding: 1em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 50px;
  display: block;
}`]
})
export class AppComponent { }
