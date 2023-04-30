import { Component } from '@angular/core';
import {Child1Component} from "./child1/child1.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    Child1Component
  ],
  standalone: true
})
export class AppComponent {
  title = 'ng15';
}
