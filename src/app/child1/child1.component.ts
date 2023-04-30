import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
})
export class Child1Component implements OnChanges {

  @Input()
  name: string = '';

  @Input()
  age: number = 0;

  // combined = `${this.name}, ${this.age}`; // not working like this !
  combined = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      console.log(`1: name changed to ${this.name}`);
      this.combined = this.buildCombined();
    }
    if (changes['age']) {
      console.log(`1: age changed to ${this.age}`);
      this.combined = this.buildCombined();
    }
  }

  private buildCombined() {
    return `${this.name}, ${this.age}`;
  }

}
