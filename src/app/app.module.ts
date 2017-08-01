import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { DisplayComponent } from './display/display.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddressComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
