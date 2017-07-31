import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/src/app/contact/contact/contact.component';
import { AddressComponent } from './address/src/app/address/address/address.component';
import { DisplayComponent } from './display/src/app/display/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddressComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
