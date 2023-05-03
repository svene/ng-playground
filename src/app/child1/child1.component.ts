import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaloiseDesignSystemModule} from "@baloise/design-system-components-angular";
import {balIconCheck, balIconRefresh} from "@baloise/design-system-icons";

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule, BaloiseDesignSystemModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {

  protected readonly balIconRefresh = balIconRefresh;
  protected readonly balIconCheck = balIconCheck;
}
