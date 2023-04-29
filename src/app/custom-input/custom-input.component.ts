import {Component, forwardRef, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule],
  template: '<input type="text" [value]="value" (input)="onChange($event.target)">',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input()
  value: string = '';

  onChange: any = () => {
    console.log('onChange');
  };
  onTouch: any = () => {};

  writeValue(value: any) {
    this.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
