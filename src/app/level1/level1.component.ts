import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Level2Component} from "../level2/level2.component";
import {bart, sven} from "../model/person";
import {Level2onPushComponent} from "../level2on-push/level2on-push.component";
import {Level2setComponent} from "../level2set/level2set.component";

@Component({
  selector: 'app-level1',
  standalone: true,
  imports: [CommonModule, Level2Component, Level2onPushComponent, Level2setComponent],
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss'],
})
export class Level1Component {

  counter = 0;
  personProperties = {firstName: sven.firstName, lastName: sven.lastName};
  personObj = sven;

  inc() {
    this.counter++;
  }

  changePersonProperties() {
    const otherPerson = this.personProperties.firstName === sven.firstName ? bart : sven;
    this.personProperties.firstName = otherPerson.firstName;
    this.personProperties.lastName = otherPerson.lastName;
  }
  changePersonRef() {
    const otherPerson = this.personObj.firstName === sven.firstName ? bart : sven;
    this.personObj = otherPerson;
  }

}
