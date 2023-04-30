import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
})
export class Child1Component {

  @Input()
  name: string = '';

  @Input()
  age: number = 0;

}
