import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomInputComponent} from "../custom-input/custom-input.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {tap} from "rxjs";

@Component({
  selector: 'app-level2',
  standalone: true,
  imports: [CommonModule, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss'],
})
export class Level2Component implements OnInit {
  constructor(
    private fb: FormBuilder,
  ) {
  }

  @Input()
  counter: number = 99;

  myForm: FormGroup = this.fb.group({
    myControl: ['initial value'],
  });

  ngOnInit(): void {
    this.myForm.controls['myControl'].valueChanges.subscribe(it => console.log(`value: ${it}`));
  }

}
