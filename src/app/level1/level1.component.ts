import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Level2Component} from "../level2/level2.component";

@Component({
  selector: 'app-level1',
  standalone: true,
  imports: [CommonModule, Level2Component],
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss'],
})
export class Level1Component {

  counter = 0;

  inc() {
    this.counter++;
    console.log(this.counter);
  }

}
