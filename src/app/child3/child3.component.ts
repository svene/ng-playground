import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnChange} from "../common/onchange";

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child3.component.html',
})
export class Child3Component {
  @Input()
  @OnChange<string>('onNameChange')
  name: string = '';

  @Input()
  @OnChange<number>('onAgeChange')
  age: number = 0;

  combined = '';

  onNameChange(value: string) {
    console.log(`3: name changed to ${this.name}`);
    this.combined = this.buildCombined();
  }

  onAgeChange(value: number) {
    console.log(`3: age changed to ${this.age}`);
    this.combined = this.buildCombined();
  }

  private buildCombined() {
    return `${this.name}, ${this.age}`;
  }
}
