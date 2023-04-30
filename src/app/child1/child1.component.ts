import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
})
export class Child1Component implements OnInit, OnChanges {

  @Input()
  name: string = '';

  @Input()
  age: number = 0;

  // combined = `${this.name}, ${this.age}`; // not working like this !
  combined = '';

  ngOnInit(): void {
    // 'combined' needs to be initialized like here and not at property definition:
    this.combined = this.buildCombined(); // BUT: will never change when inputs change
  }

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
