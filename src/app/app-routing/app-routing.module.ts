import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { ContactComponent } from '../contact/contact.component'
import { AddressComponent } from '../address/address.component'
import { DisplayComponent } from '../display/display.component'



const routes: Routes = [
    {
        path: 'contact1',
        component: ContactComponent,
    },
    {
        path: 'contact2',
        component: AddressComponent,
    },
    {
        path: 'displaycontact',
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