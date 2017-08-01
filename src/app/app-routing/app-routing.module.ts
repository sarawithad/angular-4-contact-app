import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { AddressComponent } from '../address/address.component';
import { DisplayComponent } from '../display/display.component';



const routes: Routes = [
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'address',
        component: AddressComponent,
    },
    {
        path: 'displayinfo',
        component: DisplayComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }