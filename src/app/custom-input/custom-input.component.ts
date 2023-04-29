import {Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

// see: https://medium.com/@majdasab/implementing-control-value-accessor-in-angular-1b89f2f84ebf
@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<div>
    <input type="text" [(ngModel)]="value"/>
    <span>  custom input value: {{val}}</span>
  </div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  val = '';

  set value(v: string) {
    if (v !== undefined && this.value !== v) {
      this.val = v;
      this.onChange(v);
      this.onTouch(v);
    }
  }
  get value(): string {
    return this.val;
  }

  onChange: any = () => {}
  onTouch: any = () => {}


  writeValue(value: any) {
    this.value = value;
    // this.onChange(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
