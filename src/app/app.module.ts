import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
