import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomInputComponent} from "../custom-input/custom-input.component";
import {FormBuilder, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [CommonModule, CustomInputComponent, FormsModule],
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss'],
})
export class Level2Component {

  @Input()
  counter: number = 99;

  inputValue = 'bla';
}
