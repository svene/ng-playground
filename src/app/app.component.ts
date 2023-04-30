import {Component, Input} from '@angular/core';
import { format } from 'date-fns';
import {Child1Component} from "./child1/child1.component";
import {Child2Component} from "./child2/child2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    Child1Component,
    Child2Component
  ],
  standalone: true
})
export class AppComponent {
  title = 'ng15';
  name: string = 'John';
  age: number = 19;
  counter = 0;

  changeValues() {
    const dateString = format(Date.now(), "HH:mm:ss");
    this.name = `name_${dateString}`;
    this.age = new Date().getSeconds();
  }
}
