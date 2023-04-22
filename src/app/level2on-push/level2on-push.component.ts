import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Person} from "../model/person";

@Component({
  selector: 'app-level2on-push',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level2on-push.component.html',
  styleUrls: ['./level2on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Level2onPushComponent {
  @Input()
  counter: number = 99;

  @Input()
  personProperties: Person = {firstName: '', lastName: ''};

  @Input()
  personObj: Person = {firstName: '', lastName: ''};
}
