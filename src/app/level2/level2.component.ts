import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss'],
})
export class Level2Component {

  @Input()
  counter: number = 99;

}
