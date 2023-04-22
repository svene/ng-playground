import { Component } from '@angular/core';
import {Level1Component} from "./level1/level1.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    Level1Component
  ],
  standalone: true
})
export class AppComponent {
  title = 'ng15';
}
