import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list';
import { CustomerCreateComponent } from './components/customer-create/customer-create';
import { CustomerEditComponent } from './components/customer-edit/customer-edit';
import { CustomerDetailsComponent } from './components/customer-details/customer-details';

export const routes: Routes = [
    {
        path: "",
        component: CustomerListComponent
    },
    {
        path: "create",
        component: CustomerCreateComponent
    },
    {
        path: "edit/:id",
        component: CustomerEditComponent
    },
    {
        path: "details/:id",
        component: CustomerDetailsComponent
    },
];