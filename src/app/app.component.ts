import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Child1Component} from "./child1/child1.component";
import {BaloiseDesignSystemModule} from "@baloise/design-system-components-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    Child1Component,
    BaloiseDesignSystemModule
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ng15';
}
