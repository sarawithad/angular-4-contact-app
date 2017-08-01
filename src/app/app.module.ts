import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { DisplayComponent } from './display/display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddressComponent,
    DisplayComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
