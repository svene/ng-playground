import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
})
export class Child1Component implements OnInit {

  @Input()
  name: string = '';

  @Input()
  age: number = 0;

  // combined = `${this.name}, ${this.age}`; // not working like this !
  combined = ''; // not working like this !

  ngOnInit(): void {
    // 'combined' needs to be initialize like here and not at property definition:
    this.combined = `${this.name}, ${this.age}`; // BUT: will never change when inputs change
  }

}
