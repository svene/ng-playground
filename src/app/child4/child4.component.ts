import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnChange, PropertyChange} from "../common/onchange";

@Component({
  selector: 'app-child4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child4.component.html',
})
export class Child4Component {
  @Input()
  @OnChange<string>(function(this: Child4Component, value, change) {
    console.log(`4: name is changed from ${change?.previousValue} to ${value}`);
    console.log(`4: At the moment, age is ${this.age}`)
    this.combined = this.buildCombined();
  })
  name: string = '';

  @Input()
  @OnChange<number>(function(this: Child4Component, value, change) {
    console.log(`4: age is changed from ${change?.previousValue} to ${value}`);
    console.log(`4: At the moment, name is ${this.name}`)
    this.combined = this.buildCombined();
  })
  age: number = 0;

  combined = '';

  private buildCombined() {
    return `${this.name}, ${this.age}`;
  }
}
