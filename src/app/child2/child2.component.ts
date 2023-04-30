import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
})
export class Child2Component implements OnInit {
  _name: string = '';
  _age: number = 0;
  combined = '';

  ngOnInit(): void {
    this.combined = this.buildCombined(); // BUT: will never change when inputs change
  }

  @Input()
  set name(v: string) {
    this._name = v;
    console.log(`2: name changed to ${this.name}`);
    this.combined = this.buildCombined();
  }

  @Input()
  set age(v: number) {
    this._age = v;
    console.log(`2: age changed to ${this.age}`);
    this.combined = this.buildCombined();
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  private buildCombined() {
    return `${this.name}, ${this.age}`;
  }
}
