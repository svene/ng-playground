import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from "rxjs";
import {Person} from "../model/person";

@Component({
  selector: 'app-level2set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level2set.component.html',
  styleUrls: ['./level2set.component.scss'],
})
export class Level2setComponent {
  @Input()
  counter: number = 99;

  personProperties$$ = new BehaviorSubject<Person|undefined>(undefined)
  personProperties$ = this.personProperties$$.asObservable();

  @Input()
  set personProperties(personProperties: Person) {
    this.personProperties$$.next(personProperties);
  }

  @Input()
  personObj: Person = {firstName: '', lastName: ''};
}
