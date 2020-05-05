import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import {ClienteleCreateComponent} from './components/clientele-create/clientele-create.component';
import {ClienteleListComponent} from './components/clientele-list/clientele-list.component';
import {ClienteleUpdateComponent} from './components/clientele-update/clientele-update.component';

const routes: Routes = [
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'create-clientele', component: ClienteleCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'edit-clientele/:id', component: ClienteleUpdateComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'clientele-list', component: ClienteleListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
