import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {BaloiseDesignSystemModule} from "@baloise/design-system-components-angular";


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      importProvidersFrom(BaloiseDesignSystemModule.forRoot()),
    ],
})
  .catch(err => console.error(err));
